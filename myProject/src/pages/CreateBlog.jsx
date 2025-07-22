import React, { useState } from 'react'
import Navbar from '../Components/NavBar'
import axios from 'axios'
const CreateBlog = () => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")


  async function sentDataToBackend(e) {
    e.preventDefault()
    const response = await axios.post("https://687af3b2abb83744b7ee49a6.mockapi.io/blogs", {
      title: title,
      avatar: subtitle,
      description: description,
      image: image
    })
    console.log(response)
  }
  return (
    <div>
      <Navbar />
      <div className="bg-white border rounded-lg shadow p-6 m-10 max-w-3xl mx-auto">
  <h2 className="text-2xl font-semibold mb-6">Create Blog</h2>
  
  <form onSubmit={sentDataToBackend} className="space-y-4">
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <input
        type="text"
        id="title"
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        placeholder="Enter title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
      <input
        type="text"
        id="subtitle"
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        placeholder="Enter subtitle"
        required
        onChange={(e) => setSubtitle(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <textarea
        id="description"
        rows="5"
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        placeholder="Enter description"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
      <input
        type="text"
        id="image"
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        placeholder="Link to image"
        required
        onChange={(e) => setImage(e.target.value)}
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
    >
      Submit Blog
    </button>
  </form>
</div>

      </div>


      )
}

      export default CreateBlog