import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EditPage from './pages/EditPage'
import Create from './pages/Create'
import Single from './pages/Single'
import Usestate from './pages/Usestate'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<h1>This is home page</h1>}/> */}
          <Route path='/' element={<Home />}/>
           <Route path='/create' element={<Create/>}/> 
           <Route path='/edit' element={<EditPage/>}/> 
           <Route path='/single' element={<Single/>}/> 
           <Route path='/usestate' element={<Usestate/>}/> 
           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
