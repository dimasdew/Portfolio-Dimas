import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
