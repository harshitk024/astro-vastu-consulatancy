import { NextResponse } from 'next/server'

export async function GET() {
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
  const API_KEY = process.env.YOUTUBE_API_KEY

  // 1️⃣ Get latest videos
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`

  const searchRes = await fetch(searchUrl)
  const searchData = await searchRes.json()

  const videoIds = searchData.items
    .map(item => item.id.videoId)
    .join(',')

  // 2️⃣ Get video durations
  const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=contentDetails`

  const detailsRes = await fetch(detailsUrl)
  const detailsData = await detailsRes.json()

  // 3️⃣ Filter out Shorts (< 60 sec)
  const longVideoIds = detailsData.items
    .filter(video => {
      const duration = video.contentDetails.duration
      // Convert ISO 8601 duration to seconds
      const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/)
      const minutes = parseInt(match?.[1] || 0)
      const seconds = parseInt(match?.[2] || 0)
      const totalSeconds = minutes * 60 + seconds
      return totalSeconds > 10
    })
    .map(video => video.id)

  // 4️⃣ Return filtered videos in SAME format as search API
  const filteredVideos = searchData.items
    .filter(item => longVideoIds.includes(item.id.videoId))
    .slice(0, 3)

  return NextResponse.json(filteredVideos)
}
