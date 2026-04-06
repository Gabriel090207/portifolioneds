import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Solutions "
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import About from "../components/About"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

import Divider from "../components/Divider"

function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Divider />
  <Services />
  <Divider />
  <Projects />
  <Testimonials /> 
  <About />
  <Divider />
  <CTA />
  <Footer />
</>
  )
}

export default Home