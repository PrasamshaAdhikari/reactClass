import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import Card3 from "../components/Card3"
import Footer from "../components/Footer"
import Navbar from "../Components/NavBar"


function Home(){
    return(
        <>
            <Navbar />
            <div>
      <img
        src="./campus.png"
        alt="Our place"
        className="w-full h-screen object-cover"
      />
     
    </div>
             <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-6"><u>Our Teachers</u></h1>
      
      {/* Grid container for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
                <Card1/>
                <Card2/>
                <Card3/>

      </div>
    </div>
           
            
        </>  
    )
}

export default Home