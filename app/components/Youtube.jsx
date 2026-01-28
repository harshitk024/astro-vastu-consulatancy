'use client'

import { useEffect, useState } from 'react'

export default function YoutubeSection() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('/api/youtube')
      .then(res => res.json())
      .then(setVideos)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Latest Videos
        </h2>
        <p className="text-gray-500 mt-2">
          Watch our recent uploads on YouTube
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-sm border overflow-hidden
                       hover:shadow-lg transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition-transform duration-300"
              />

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center
                              bg-black/0 group-hover:bg-black/30 transition">
                <div className="w-14 h-14 rounded-full bg-white/90
                                flex items-center justify-center">
                  ▶
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-sm md:text-base line-clamp-2">
                {video.snippet.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
