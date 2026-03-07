"use client"

import { assets } from '@/Assets/assets'
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import Image from "next/image"

const Page = () => {

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  const fileInputRef = useRef(null)

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Acharya Doctor Neetu Mohan",
    authorImg: "/author_img.png"
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const previewURL = URL.createObjectURL(file)

    setImage(file)
    setPreview(previewURL)
  }

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    if (loading) return
    setLoading(true)

    try {

      const formData = new FormData()

      formData.append("title", data.title)
      formData.append("description", data.description)
      formData.append("category", data.category)
      formData.append("author", data.author)
      formData.append("authorImg", data.authorImg)
      formData.append("image", image)

      const response = await axios.post("/api/blog", formData)

      if (response.data.success) {

        toast.success(response.data.msg)

        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Acharya Doctor Neetu Mohan",
          authorImg: "/author_img.png"
        })

        setImage(null)
        setPreview(null)

      } else {
        toast.error("Error adding blog")
      }

    } catch (error) {
      toast.error("Something went wrong")
    }

    setLoading(false)
  }

  return (

    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:px-16">

      <p className="text-xl">Upload thumbnail</p>

      {/* Upload Area */}
      <div className="mt-4 w-[160px]">

        <div
          onClick={() => fileInputRef.current.click()}
          className="cursor-pointer"
        >
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="border w-[160px] h-[90px] object-cover"
            />
          ) : (
            <Image
              src={assets.upload_area}
              alt="upload"
              width={160}
              height={90}
              className="border"
            />
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          required
        />

      </div>

      {/* Form Fields */}
      <div className="mt-6 w-full sm:w-[500px]">

        <p className="text-xl">Blog title</p>

        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />

        <p className="text-xl mt-6">Blog Description</p>

        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full mt-4 px-4 py-3 border"
          placeholder="Write content here"
          rows={6}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-40 h-12 text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-black"
          }`}
        >
          {loading ? "Adding..." : "Add Blog"}
        </button>

      </div>

    </form>
  )
}

export default Page