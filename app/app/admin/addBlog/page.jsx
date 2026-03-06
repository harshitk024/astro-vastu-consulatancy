"use client"

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Acharya Doctor Neetu Mohan",
    authorImg: "/author_img.png"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

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

        setImage(false)
      } else {
        toast.error("Error")
      }

    } catch (error) {
      toast.error("Something went wrong")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>

      <p className='text-xl'>Upload thumbnail</p>

      <label htmlFor="image">
        <Image
          className='mt-4'
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt=""
        />
      </label>

      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />

      <p className='text-xl mt-4'>Blog title</p>

      <input
        name='title'
        onChange={onChangeHandler}
        value={data.title}
        className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
        type="text"
        placeholder='Type here'
        required
      />

      <p className='text-xl mt-4'>Blog Description</p>

      <textarea
        name='description'
        onChange={onChangeHandler}
        value={data.description}
        className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
        placeholder='Write content here'
        rows={6}
        required
      />

      <br />

      <button
        type='submit'
        disabled={loading}
        className={`mt-8 w-40 h-12 text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-black"
        }`}
      >
        {loading ? "Adding..." : "Add Blog"}
      </button>

    </form>
  )
}

export default page