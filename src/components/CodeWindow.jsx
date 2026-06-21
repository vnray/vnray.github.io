import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const codeSnippets = [
  `const developer = {
  name: "Vivekanand",
  craft: ["Frontend", "Mobile"],
  superpower: "Pixel Perfect",
  code: () => build().amazing()
};`,
  `function createMagic() {
  const vision = getVision();
  const craft = ["React", "RN", "TS"];

  return craft
    .map(skill => skill + " ✦")
    .join(" → ");
}`,
  `interface Project {
  idea: string;
  stack: Tech[];
  deadline: "ASAP";
}

type Result = Project & {
  status: "✨ delivered";
};`,
  `export class Builder {
  constructor() {
    this.mindset = "growth";
    this.standards = "high";
  }

  async deliver() {
    return await Promise
      .resolve("excellence");
  }
}`,
]

export default function CodeWindow() {
  const [codeIndex, setCodeIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  const code = codeSnippets[codeIndex]

  useEffect(() => {
    if (!typing) return
    if (displayed.length < code.length) {
      const timer = setTimeout(() => {
        setDisplayed(code.slice(0, displayed.length + 1))
      }, 20 + Math.random() * 30)
      return () => clearTimeout(timer)
    }
    const pause = setTimeout(() => {
      setTyping(false)
      const next = (codeIndex + 1) % codeSnippets.length
      setTimeout(() => {
        setCodeIndex(next)
        setDisplayed('')
        setTyping(true)
      }, 800)
    }, 2500)
    return () => clearTimeout(pause)
  }, [displayed, typing, code, codeIndex])

  return (
    <div className="relative w-full max-w-[420px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative bg-[#0a0a0f] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl shadow-[#FF6B35]/5"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-gray-600 font-mono ml-3">developer.js</span>
        </div>
        <div className="p-4 md:p-5 font-mono text-[11px] md:text-[12px] leading-relaxed overflow-x-auto">
          <div className="flex">
            <div className="text-gray-700 text-right pr-3 select-none space-y-[1px]">
              {code.split('\n').map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <pre className="flex-1 text-gray-300">
              {displayed}
              {displayed.length < code.length && (
                <span className="inline-block w-[2px] h-[14px] bg-[#FF6B35] ml-[1px] animate-pulse align-middle" />
              )}
            </pre>
          </div>
        </div>
      </motion.div>
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-[#FF6B35]/20 via-transparent to-[#06B6D4]/20 opacity-30 blur-sm -z-10" />
    </div>
  )
}
