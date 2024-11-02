import Analytics from "./Component/Analytics"
import Benefits from "./Component/Benefits"
import BusinessGrowth from "./Component/BusinessGrowth"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Navbar from "./Component/Navbar"
import Product from "./Component/Product"
import VideoSection from "./Component/VideoSection"


function App() {
  

  return (
    <>
      <Navbar />
      <Header />
      <Benefits/>
      <BusinessGrowth/>
      <Analytics />
      <VideoSection />
      <Product />
      <Footer/>
    </>
  )
}

export default App
