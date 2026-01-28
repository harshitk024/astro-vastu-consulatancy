'use client'

import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'
import Link from 'next/link'

const BlogList = ({ limit, showViewMore = false }) => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs

  return (
    <div>
      <div className='flex flex-wrap justify-around gap-y-10 mb-16 xl:mx-24'>
        {displayedBlogs.map((item) => (
          <BlogItem
            key={item._id}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>

      {showViewMore && (
        <div className="text-center">
          <Link
            href="/blogsPage"
            className="text-primary font-semibold hover:underline"
          >
            View more blogs →
          </Link>
        </div>
      )}
    </div>
  )
}

export default BlogList
