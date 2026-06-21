import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

const serviceIcons = {
  code: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  mobile: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  ),
  design: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  ),
  audit: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
}

export default function Freelance() {
  const [ref, isVisible] = useScrollReveal()
  const { freelance } = personalInfo

  return (
    <section id="freelance" className="pt-8 md:pt-16 pb-0 px-5 md:px-6 relative overflow-hidden">
      <div className="section-gradient absolute inset-0 pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <span className="text-[11px] text-[#FF6B35] font-mono tracking-widest uppercase mb-2 md:mb-3 block">Freelance</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display leading-[1.1]">
            Available for{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFB088] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-[#06B6D4] opacity-75" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#06B6D4]" />
              </span>
              <span className="text-xs text-[#06B6D4] font-mono">Open for projects</span>
            </div>
            <span className="text-xs text-gray-600 font-mono">|</span>
            <span className="text-xs text-gray-500 font-mono">Response: {freelance.response}</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 md:mb-10">
          {freelance.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 via-transparent to-[#06B6D4]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 group-hover:border-white/[0.12] transition-all h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35]/20 to-[#06B6D4]/20 border border-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {serviceIcons[service.icon]}
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-gray-600 bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className="text-[11px] text-gray-500 font-mono tracking-widest uppercase mb-4 md:mb-6 block">The Process</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {freelance.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                className="relative"
              >
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 text-center group hover:border-white/[0.12] transition-all">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB088]/20 border border-[#FF6B35]/20 flex items-center justify-center mx-auto mb-3 group-hover:border-[#FF6B35]/40 transition-all">
                    <span className="text-sm font-bold text-[#FF6B35]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h5 className="text-white text-sm font-medium mb-1">{step.step}</h5>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-6 md:mt-10 text-center"
        >
          <div className="relative rounded-2xl p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-transparent border border-white/[0.06] rounded-2xl" />
            <div className="relative">
              <p className="text-white text-lg md:text-xl font-medium mb-1 md:mb-2 font-display">Have a project in mind?</p>
              <p className="text-gray-500 text-sm mb-5 md:mb-6">Let's build something great together.</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-all text-sm font-medium shadow-lg shadow-[#FF6B35]/20"
              >
                Start a conversation
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
