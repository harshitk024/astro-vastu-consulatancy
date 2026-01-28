import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server")
import cloudinary from "@/lib/config/cloudinary"
import { writeFile } from 'fs/promises'
const fs = require('fs')

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();


// API Endpoint to get all blogs
export async function GET(request) {

  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  }
  else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs })
  }
}


// API Endpoint For Uploading Blogs
export async function POST(request) {
  try {
    const formData = await request.formData();

    const image = formData.get("image");
    if (!image) {
      return NextResponse.json(
        { success: false, msg: "Image is required" },
        { status: 400 }
      );
    }

    // Convert image to buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "blogs",
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: uploadResult.secure_url, 
      authorImg: formData.get("authorImg"),
    };

    await BlogModel.create(blogData);

    return NextResponse.json({
      success: true,
      msg: "Blog Added",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}

// Creating API Endpoint to delete Blog

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => { });
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}