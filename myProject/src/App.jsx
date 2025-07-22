import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EditPage from './pages/EditPage'
import Create from './pages/Create'
import Single from './pages/Single'
import Usestate from './pages/Usestate'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<h1>This is home page</h1>}/> */}
          <Route path='/' element={<Home />}/>
           <Route path='/create' element={<Create/>}/> 
           <Route path='/edit' element={<EditPage/>}/> 
           <Route path='/env' element={<Single/>}/> 
           <Route path='/blog/:id' element={<Blog/>} />
           <Route path='/usestate' element={<Usestate/>}/> 
           <Route path='/create-blog' element={<CreateBlog/>}/>
           <Route path='/edit-blog/:id' element={<EditBlog/>}/>

           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
