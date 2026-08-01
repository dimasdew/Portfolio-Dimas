import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Projects from '../components/Projects'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
