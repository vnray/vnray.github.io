import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import Magnetic from './Magnetic'

const sections = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let lastScroll = 0
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHidden(y > 200 && y > lastScroll)
      lastScroll = y

      for (const { id } of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/70 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="relative group">
            <span className="text-base font-semibold tracking-tight">
              <span className="text-white/90">{personalInfo.name.split(' ')[0].toLowerCase()}</span>
              <span className="text-[#FF6B35]">.</span>
              <span className="text-white/50">dev</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {sections.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  active === id
                    ? 'text-white bg-white/[0.06]'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#FF6B35] rounded-full" />
                )}
              </button>
            ))}
            <div className="w-px h-5 bg-white/[0.06] mx-2" />
            <Magnetic strength={0.2}>
              <a
                href={personalInfo.resumeUrl}
                className="text-sm text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] px-4 py-2 rounded-lg transition-all block"
              >
                Resume
              </a>
            </Magnetic>
          </div>

          <button className="md:hidden text-white/70 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col gap-2">
                {sections.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`text-sm text-left px-3 py-2 rounded-lg transition-colors ${
                      active === id ? 'text-white bg-white/[0.06]' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <a href={personalInfo.resumeUrl} className="text-sm font-medium text-center text-white bg-white/[0.06] px-4 py-2.5 rounded-lg mt-2">
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
