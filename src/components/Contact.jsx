import { useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Magnetic from './Magnetic'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle')
  const [ref, isVisible] = useScrollReveal()

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const payload = new FormData()
      payload.append('name', formData.name)
      payload.append('email', formData.email)
      payload.append('message', formData.message)
      if (file) payload.append('attachment', file)
      const res = await fetch('https://usebasin.com/f/80bc40663579', { method: 'POST', body: payload })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setFile(null)
      } else {
        console.error('Basin error:', await res.text())
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="pt-8 md:pt-16 pb-0 px-5 md:px-6 relative overflow-hidden">
      <div className="section-gradient absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <span className="text-[11px] text-[#FF6B35] font-mono tracking-widest uppercase mb-2 md:mb-3 block">Contact</span>
          <h3 className="text-3xl sm:text-5xl font-bold text-white font-display leading-[1.1]">
            Let's work{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#06B6D4] bg-clip-text text-transparent">together</span>
          </h3>
          <p className="text-gray-600 text-sm mt-3 max-w-lg">
            Have a project, idea, or just want to connect? Drop a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-all">
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block mb-1">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="text-white/70 hover:text-[#FF6B35] transition-colors text-sm font-mono">
                {personalInfo.email}
              </a>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-all">
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block mb-1.5">Location</span>
              <span className="text-white/70 text-sm font-mono">{personalInfo.location}</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-all">
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block mb-2 md:mb-3">Social</span>
              <div className="flex items-center gap-4">
                {[
                  { href: personalInfo.social.github, label: 'GitHub' },
                  { href: personalInfo.social.linkedin, label: 'LinkedIn' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-[#FF6B35] transition-colors font-mono"
                  >
                    {s.label.toLowerCase()}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-[11px] text-gray-500 font-mono mb-1.5 group-focus-within:text-[#FF6B35] transition-colors">Name</label>
                  <input
                    name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-white/80 text-sm placeholder-gray-700 focus:outline-none focus:border-[#FF6B35]/50 focus:bg-white/[0.04] transition-all"
                  />
                </div>
                <div className="group">
                  <label className="block text-[11px] text-gray-500 font-mono mb-1.5 group-focus-within:text-[#FF6B35] transition-colors">Email</label>
                  <input
                    name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-white/80 text-sm placeholder-gray-700 focus:outline-none focus:border-[#FF6B35]/50 focus:bg-white/[0.04] transition-all"
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-[11px] text-gray-500 font-mono mb-1.5 group-focus-within:text-[#FF6B35] transition-colors">Message</label>
                <textarea
                  name="message" required rows={4}
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-white/80 text-sm placeholder-gray-700 focus:outline-none focus:border-[#FF6B35]/50 focus:bg-white/[0.04] transition-all resize-none"
                />
              </div>

              <div className="group">
                <label className="block text-[11px] text-gray-500 font-mono mb-1.5">Attachment</label>
                <label className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-gray-500 cursor-pointer hover:border-white/[0.1] transition-all flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span className="flex-1 truncate">{file ? file.name : 'Attach a file (optional)'}</span>
                  <input type="file" onChange={(e) => setFile(e.target.files[0] || null)} className="hidden" />
                </label>
              </div>

              <Magnetic strength={0.25}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-all text-sm font-medium shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </Magnetic>
              {status === 'success' && (
                <div className="text-center py-3 px-4 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                  <p className="text-[#06B6D4] text-sm font-mono">Message sent! I'll respond within 24h.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="text-center py-3 px-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 text-sm font-mono">Something went wrong. Try emailing directly.</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
