import axios from 'axios'
import React, { useState } from 'react'
import Navbar from '../Components/NavBar'
import {  useNavigate, useParams } from 'react-router-dom'

  const EditBlog = () => {
    const data=useParams()
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
  const navigate= useNavigate()
  
    async function sentDataToBackend(e) {
      e.preventDefault()
      const response = await axios.put("https://687af3b2abb83744b7ee49a6.mockapi.io/blogs/"+data.id, {
        title: title,
        avatar: subtitle,
        description: description,
        image: image
      })
      if(response.status==200){
        alert("Updated Successfully")
        navigate("/")
      }else{
        alert("Something went wrong")
      }
    }
  return (
    <div>
              <div className="bg-white border-4 rounded-lg shadow relative m-10">
    <div className="flex items-start justify-between p-5 border-b rounded-t">
      <h3 className="text-xl font-semibold">
        Blog Edit Form
      </h3>
      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
    </div>
      <form onSubmit={sentDataToBackend} className="space-y-4">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2"><h3>  Title</h3></label>
            <input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Title" required onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="subtitle" className="text-sm font-medium text-gray-900 block mb-2"><h3>  Subtitle</h3></label>
            <input type="text" name="" id="subtitle" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Subtitle" required onChange={(e) => setSubtitle(e.target.value)}/>
         </div>
          <div className="col-span-full">
            <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2"><h3>  Description</h3></label>
            <textarea id="description" rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Enter Description" defaultValue={""} onChange={(e) => setDescription(e.target.value)}/>
          </div>
             <div className="col-span-6 sm:col-span-3">
            <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2"><h3>  Image</h3></label>
            <input type="text" name="image" id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Link of your image" required onChange={(e) => setImage(e.target.value)}/>
         </div>
       <div className="p-6 border-t border-gray-200 rounded-b">
      <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Edit Blog</button>
      
       </div>
    </form>
  </div>
            



    </div>
  )
}

export default EditBlog