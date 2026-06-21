import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="experience" className="pt-8 md:pt-16 pb-0 px-5 md:px-6 relative overflow-hidden">
      <div className="section-gradient absolute inset-0 pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <span className="text-[11px] text-[#FF6B35] font-mono tracking-widest uppercase mb-2 md:mb-3 block">Experience</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display leading-[1.1]">
            Professional{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFB088] bg-clip-text text-transparent">Journey</span>
          </h2>
        </motion.div>

        <div className="relative space-y-4 md:space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative pl-10 before:absolute before:left-[9px] before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent last:before:hidden"
            >
              <div className="absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full border-2 border-[#FF6B35]/40 bg-[#080808] group-hover:border-[#FF6B35] group-hover:shadow-[0_0_15px_rgba(255,107,53,0.2)] transition-all" />
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 md:p-6 group-hover:border-white/[0.1] group-hover:bg-white/[0.03] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-[#FF6B35]/60 hover:text-[#FF6B35] text-sm font-mono transition-colors">
                      @ {exp.company}
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm font-mono">@ {exp.company}</span>
                  )}
                </div>
                <div className="text-[11px] text-gray-600 font-mono mb-4">{exp.period}</div>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-[#FF6B35]/40 mt-1 shrink-0">—</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
