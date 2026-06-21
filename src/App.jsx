import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Freelance from './components/Freelance'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'
import Cursor from './components/Cursor'
import Spotlight from './components/Spotlight'

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen font-sans relative">
      <Cursor />
      <Spotlight />
      <div className="noise-overlay" />
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Freelance />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
