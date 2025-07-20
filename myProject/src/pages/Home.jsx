import { useEffect, useState } from "react"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Navbar from "../Components/NavBar"
import axios from 'axios'


function Home() {
  const [blogs, setBlogs] = useState(null)
  
  const fetchBlog = async () => {
    const response = await axios.get("https://687af3b2abb83744b7ee49a6.mockapi.io/blogs")
    if (response) {
      console.log("response.data : ", response.data)
      setBlogs(response.data)
    }
  }
  
  useEffect(() => {         //  Anonymous function/callback function(any function being argument of another function), dependency array
    fetchBlog();
  }, [])


  return (


    <>
      <Navbar />
    


      {/* <div>
      <img
        src="./campus.png"
        alt="Our place"
        className="w-full h-screen object-cover"
      />
     
    </div>
             <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-6"><u>Our Teachers</u></h1>
      
      {/* Grid container for cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
                <Card1/>
                <Card2/>
                <Card3/>

      </div>
    </div> */}


      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
        <h1>hello</h1>
        {
          blogs && (
            blogs.map((blog) => (
              <Card key={blog.id} blog={blog}/>
            ))
          )
        }
      </div>

    </>
  )
}

export default Home