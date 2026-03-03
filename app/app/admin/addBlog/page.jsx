'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {

    const [image,setImage] = useState(false);
    const editorRef = useRef(null);
    const [data,setData] = useState({
        title:"",
        description:"",
        category:"Astrology",
        author:"Acharya Dr. Neetu Mohan",
        authorImg:"/author_img.png"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const updateDescription = () => {
      const value = editorRef.current?.innerHTML || '';
      setData((prev) => ({ ...prev, description: value }));
    }

    const applyFormat = (command, value = null) => {
      if (!editorRef.current) return;
      editorRef.current.focus();
      document.execCommand(command, false, value);
      updateDescription();
    }

    const addImageByUrl = () => {
      const imageUrl = window.prompt('Paste image URL');
      if (!imageUrl) return;
      applyFormat('insertImage', imageUrl);
    }

    const addVideoByUrl = () => {
      const videoUrl = window.prompt('Paste video URL (YouTube/Vimeo/embed link)');
      if (!videoUrl || !editorRef.current) return;

      editorRef.current.focus();
      const embedHtml = `<div class="my-4"><iframe src="${videoUrl}" frameborder="0" allowfullscreen class="w-full min-h-[260px] rounded-lg"></iframe></div>`;
      document.execCommand('insertHTML', false, embedHtml);
      updateDescription();
    }

    const clearFormatting = () => {
      applyFormat('removeFormat');
      applyFormat('unlink');
    }

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('category',data.category);
        formData.append('author',data.author);
        formData.append('authorImg',data.authorImg);
        formData.append('image',image);
        const response = await axios.post('/api/blog',formData);
        if (response.data.success) {
            toast.success(response.data.msg);
            setImage(false);
            setData({
              title:"",
              description:"",
              category:"Astrology",
              author:"Acharya Doctor Neetu Mohan",
              authorImg:"/author_img.png"
            });
            if (editorRef.current) {
              editorRef.current.innerHTML = '';
            }
        }
        else{
            toast.error("Error");
        }
    }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='p-10 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor="image">
            <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4'>Blog title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' required />
        <p className='text-xl mt-4'>Blog Description</p>
        <div className='w-full sm:w-[700px] mt-4 border rounded-md overflow-hidden'>
          <div className='flex flex-wrap gap-2 p-3 bg-gray-50 border-b'>
            <button type='button' onClick={() => applyFormat('bold')} className='px-3 py-1 border rounded text-sm font-semibold'>B</button>
            <button type='button' onClick={() => applyFormat('italic')} className='px-3 py-1 border rounded text-sm italic'>I</button>
            <button type='button' onClick={() => applyFormat('underline')} className='px-3 py-1 border rounded text-sm underline'>U</button>
            <button type='button' onClick={() => applyFormat('insertUnorderedList')} className='px-3 py-1 border rounded text-sm'>• List</button>
            <button type='button' onClick={() => applyFormat('insertOrderedList')} className='px-3 py-1 border rounded text-sm'>1. List</button>
            <button type='button' onClick={() => applyFormat('formatBlock', '<h2>')} className='px-3 py-1 border rounded text-sm'>H2</button>
            <button type='button' onClick={() => applyFormat('formatBlock', '<blockquote>')} className='px-3 py-1 border rounded text-sm'>Quote</button>
            <button type='button' onClick={addImageByUrl} className='px-3 py-1 border rounded text-sm'>Image URL</button>
            <button type='button' onClick={addVideoByUrl} className='px-3 py-1 border rounded text-sm'>Video Embed</button>
            <button type='button' onClick={clearFormatting} className='px-3 py-1 border rounded text-sm'>Clear</button>
          </div>

          <div
            ref={editorRef}
            contentEditable
            onInput={updateDescription}
            className='min-h-[220px] p-4 focus:outline-none prose max-w-none'
            data-placeholder='Write your blog content here. Add headings, lists, links, images, and video embeds.'
          />
        </div>
        <input
          type='text'
          name='description'
          value={data.description}
          onChange={onChangeHandler}
          className='hidden'
          required
          readOnly
        />
        {/* <p className='text-xl mt-4'>Blog category</p> */}
        {/* <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
        </select> */}
        <br />
        <button type="submit" className='mt-8 w-40 h-12 bg-black text-white hover:opacity-70'>ADD</button>
      </form>
    </>
  )
}

export default Page
