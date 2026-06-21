import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedCounter from './AnimatedCounter'

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className="pt-8 md:pt-16 pb-0 px-5 md:px-6 relative overflow-hidden">
      <div className="section-gradient absolute inset-0 pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <span className="text-[11px] text-[#FF6B35] font-mono tracking-widest uppercase mb-2 md:mb-3 block">About</span>
          <h3 className="text-3xl sm:text-5xl font-bold text-white font-display leading-[1.1]">
            Beyond the
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFB088] bg-clip-text text-transparent"> code</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5"
          >
            {personalInfo.about.map((para, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-[15px] leading-loose">
                {para}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-4">
              {['React', 'React Native', 'TypeScript', 'Node.js', 'Next.js'].map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-gray-500 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-md font-mono hover:border-[#FF6B35]/30 hover:text-[#FF6B35] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 md:p-6 backdrop-blur">
              <span className="text-[11px] text-gray-500 font-mono tracking-widest uppercase mb-6 block">Stats</span>
              <div className="space-y-4 md:space-y-6">
                {personalInfo.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-end justify-between border-b border-white/[0.04] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#06B6D4] bg-clip-text text-transparent">
                      <AnimatedCounter target={parseInt(stat.value)} suffix={stat.value.includes('+') ? '+' : ''} />
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Availability</span>
                  <span className="flex items-center gap-2 text-[#06B6D4] font-mono text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                    open for work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
