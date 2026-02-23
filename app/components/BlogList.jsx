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
    <section className="max-w-7xl mx-auto px-6 lg:px-12">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            className="inline-block text-primary font-semibold hover:underline"
          >
            View more blogs →
          </Link>
        </div>
      )}
    </section>
  )
}

export default BlogList