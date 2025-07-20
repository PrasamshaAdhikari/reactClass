import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../Components/NavBar';



// React – the core React library.

// useState – hook used to declare state inside a functional component.

// useEffect – hook used to run side effects like fetching data when the component mounts.

// useParams – a React Router hook to extract dynamic URL parameters (in this case, id).

// axios – a library used to make HTTP requests (GET, POST, etc.).



const Blog = () => {                        //Functional component
    const [blog, setBlog] = useState();
    const {id} = useParams(); 
    const navigate= useNavigate()


// fetchBlog() is an asynchronous function that:

// Sends a GET request to the API with the blog id from the URL.

// If the response is successful, logs it and stores it in state using setBlog.


     const fetchBlog = async () => {          
       const response = await axios.get("https://687af3b2abb83744b7ee49a6.mockapi.io/blogs/"+id)
       if (response) {
         console.log("response.data : ", response.data)
         setBlog(response.data)
       }
     }

      const deleteBlog = async()=>{

       const response= await axios.delete("https://687af3b2abb83744b7ee49a6.mockapi.io/blogs/"+id)
       if(response.status==200){
          alert("Deleted Successfully")
          navigate("/")
       }

     }

// blog state holds the blog data fetched from the API.

// setBlog is the function to update the blog state.

// id is extracted from the URL using useParams() (e.g., /blogs/1 gives id = 1).


     
     useEffect(() => {         //  Anonymous function/callback function(any function being argument of another function), dependency array
       fetchBlog();
     }, [])
   
// useEffect() runs only once when the component mounts because of the empty dependency array [].

// It calls fetchBlog() to get the blog data when the component first loads.



  return (
    <>

       {/* <Navbar/> */}

    {blog &&
        <>
       
    <img src = {blog.image} />
    <div>{blog.avatar}</div>
       <div >{blog.title}</div>
    <div>{blog.description}</div> 
    <button onClick={deleteBlog} className='bg-blue-700 text-white hover:bg-blue-950'>Delete Me</button>
    
     </>

// blog && checks if blog data is available (to avoid errors on first render).

// If blog is defined:

// It renders the blog image, title and description.



     }
    </>
  )
}

export default Blog                              //Blog: Exports the Blog component for use in other parts of the application.

