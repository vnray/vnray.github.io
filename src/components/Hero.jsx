import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import Typewriter from './Typewriter'
import Magnetic from './Magnetic'
import CodeWindow from './CodeWindow'

function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return <>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</>
}

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  x: ((i * 37 + 13) % 100),
  y: ((i * 23 + 7) % 100),
  s: (i % 4) + 1,
  d: (i * 0.35) % 8,
  t: 4 + (i % 6),
}))

function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%)' }}
        animate={{ x: [0, 120, -60, 0], y: [0, -60, 80, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)' }}
        animate={{ x: [0, -80, 60, 0], y: [0, 50, -40, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hidden md:block">
        <motion.div
          className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 0.7, 1], opacity: [0.4, 0.9, 0.2, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 0.6, 1.2, 1], opacity: [0.3, 0.8, 0.1, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04] hidden md:block"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(255,107,53,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.04) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.03) 0%, transparent 50%)',
        }}
      />
      {PARTICLES.map((p, i) => (
        <motion.div
          key={p.x + '-' + p.y}
          className={`absolute rounded-full bg-white/40 ${i >= 20 ? 'hidden md:block' : ''}`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -50, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.t, repeat: Infinity, delay: p.d, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative lg:min-h-dvh flex flex-col justify-center pt-16 md:pt-24 px-5 md:px-6 overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-[#06B6D4] opacity-75" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-[#06B6D4]" />
                </span>
                <span className="text-[11px] text-gray-600 tracking-wide">Available for new projects</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-4 font-display"
            >
              <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF8F5E] to-[#FFB088] bg-clip-text text-transparent">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl mb-4 md:mb-6"
            >
              I build{' '}
              <Typewriter
                texts={[
                  'digital experiences',
                  'performant systems',
                  'pixel-perfect UIs',
                  'clean architecture',
                  'production apps',
                ]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#06B6D4] font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-gray-600 text-sm max-w-lg mb-6 md:mb-8 leading-relaxed"
            >
              {personalInfo.about[0]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Magnetic strength={0.25}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-all text-sm font-medium shadow-lg shadow-[#FF6B35]/20"
                >
                  Start a project
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-white/70 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.03] transition-all text-sm"
                >
                  View my work
                </a>
              </Magnetic>
              <div className="flex items-center gap-3 ml-2">
                {[
                  { href: personalInfo.social.github, label: 'GH' },
                  { href: personalInfo.social.linkedin, label: 'LI' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#FF6B35] transition-colors text-[11px] font-mono tracking-wider"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
            <CodeWindow />
            <motion.div
              className="absolute -top-8 -right-4 w-16 h-16"
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-lg">
                ⚡
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-6 w-14 h-14"
              animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center text-base">
                🚀
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 mt-auto pt-8 md:pt-16 pb-4 md:pb-6"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[11px] text-gray-600 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]/50" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-50">&mdash;</span>
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-50">&mdash;</span>
            <span><Clock /> {Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            <span>Available</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="opacity-50">&mdash;</span>
            <span>Scroll &darr;</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
