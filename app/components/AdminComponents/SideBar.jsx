import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-20 sm:w-72 bg-gray-200 border-r border-gray-300 flex flex-col">
      
      {/* Header */}
      <div className="p-6 text-lg font-semibold border-b border-gray-300">
        Admin Panel
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-5 p-4">
        
        <Link
          href="/admin/addBlog"
          className="flex items-center gap-3 border border-black bg-white px-4 py-3 font-medium shadow-[-5px_5px_0px_#000000] hover:translate-x-1 hover:-translate-y-1 transition"
        >
          <Image src={assets.add_icon} alt="Add blog" width={24} />
          <span className="hidden sm:inline">Add blogs</span>
        </Link>

        <Link
          href="/admin/blogList"
          className="flex items-center gap-3 border border-black bg-white px-4 py-3 font-medium shadow-[-5px_5px_0px_#000000] hover:translate-x-1 hover:-translate-y-1 transition"
        >
          <Image src={assets.blog_icon} alt="Blog list" width={24} />
          <span className="hidden sm:inline">Blog lists</span>
        </Link>

        <Link
          href="/admin/subscriptions"
          className="flex items-center gap-3 border border-black bg-white px-4 py-3 font-medium shadow-[-5px_5px_0px_#000000] hover:translate-x-1 hover:-translate-y-1 transition"
        >
          <Image src={assets.email_icon} alt="Subscriptions" width={24} />
          <span className="hidden sm:inline">Subscriptions</span>
        </Link>

      </nav>
    </aside>
  )
}

export default Sidebar
