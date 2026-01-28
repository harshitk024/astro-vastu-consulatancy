import { NextResponse } from 'next/server'

export async function GET() {
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
  const API_KEY = process.env.YOUTUBE_API_KEY

  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`

  const res = await fetch(url)
  const data = await res.json()
  const onlyVideos = data.items.filter(
    (item) => item.id.kind === 'youtube#video'
  )

  return NextResponse.json(onlyVideos)
}
