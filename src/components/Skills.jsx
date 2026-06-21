import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../data/portfolio'
import { getTechIcon } from '../data/techIcons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const tabs = [
  { key: 'frontend', label: 'Frontend', color: '#FF6B35' },
  { key: 'backend', label: 'Backend', color: '#06B6D4' },
  { key: 'ai', label: 'AI & Tools', color: '#8B5CF6' },
  { key: 'mobile', label: 'Mobile', color: '#10B981' },
]

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1)
  const [activeTab, setActiveTab] = useState('frontend')

  const activeSkills = skills[activeTab] || []
  const hasLevel = activeSkills.length > 0 && typeof activeSkills[0] === 'object' && 'level' in activeSkills[0]
  const tabColor = tabs.find((t) => t.key === activeTab)?.color || '#FF6B35'
  const isAiTab = activeTab === 'ai'

  return (
    <section id="skills" className="pt-8 md:pt-16 pb-0 px-5 md:px-6 relative overflow-hidden">
      <div className="section-gradient absolute inset-0 pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <span className="text-[11px] text-[#FF6B35] font-mono tracking-widest uppercase mb-2 md:mb-3 block">Skills</span>
          <h3 className="text-3xl sm:text-5xl font-bold text-white font-display leading-[1.1]">
            Technical{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#06B6D4] bg-clip-text text-transparent">Expertise</span>
          </h3>
        </motion.div>

        <div className="flex items-center gap-2 mb-4 md:mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-2.5 text-sm rounded-full transition-all duration-300 font-medium ${
                activeTab === tab.key
                  ? 'text-white bg-white/[0.08] border border-white/[0.1]'
                  : 'text-gray-500 hover:text-gray-300 bg-transparent border border-transparent hover:border-white/[0.06]'
              }`}
            >
              {activeTab === tab.key && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full"
                  style={{ background: tabColor }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {hasLevel ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className={`group bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-white/[0.12] hover:bg-white/[0.03] transition-all ${isAiTab ? 'p-3' : 'p-4'}`}
                  >
                    <div className={`flex items-center ${isAiTab ? 'gap-2' : 'gap-3'} ${isAiTab ? 'mb-2' : 'mb-3'}`}>
                      <div
                        className={`rounded-xl flex items-center justify-center shrink-0 transition-all ${isAiTab ? 'w-14 h-14' : 'w-10 h-10'}`}
                        style={{ background: `${tabColor}12`, border: `1px solid ${tabColor}20` }}
                      >
                        {getTechIcon(skill.name, { size: isAiTab ? 36 : 20 })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${tabColor}, ${tabColor}dd)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {activeSkills.map((tool, i) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="group bg-white/[0.02] border border-white/[0.06] rounded-xl p-3.5 flex items-center gap-3 hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-white/[0.12] transition-all">
                      {getTechIcon(tool, { size: 18 })}
                    </div>
                    <span className="text-sm text-gray-400 font-mono group-hover:text-white transition-colors">
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
