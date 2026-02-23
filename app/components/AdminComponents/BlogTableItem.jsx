import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa"

const BlogTableItem = ({ author, title, date, deleteBlog, mongoId }) => {

  const [showConfirm, setShowConfirm] = useState(false)
  const BlogDate = new Date(date)

  const handleDelete = () => {
    deleteBlog(mongoId)
    setShowConfirm(false)
  }

  return (
    <>
      <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
          <p>{author ? author : "No author"}</p>
        </th>

        <td className='px-6 py-4'>
          {title ? title : "no title"}
        </td>

        <td className='px-6 py-4'>
          {BlogDate.toDateString()}
        </td>

        <td
          onClick={() => setShowConfirm(true)}
          className='px-6 py-4 cursor-pointer text-red-500 hover:text-red-700'
        >
          <FaTrash />
        </td>
      </tr>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Delete Blog <span className='font-bold text-black'>{title}</span> ?
            </h2>
            <p className="text-gray-600 mb-6">
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogTableItem