import Hero from "./components/Hero"
import HighLights from "./components/HighLights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import Features from "./components/Features"
import Chip from "./components/Chip"
import Footer from "./components/Footer"


function App() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <HighLights/>
      <Model/>
      <Features/>
      <Chip/>
      <Footer/>
    </main>
  )
}

export default App 
