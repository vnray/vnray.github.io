import { useState, useEffect } from 'react'

export default function Typewriter({ texts, className }) {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplay(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setDisplay(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % texts.length)
        }
      }
    }, deleting ? 30 : 60)

    return () => clearTimeout(timeout)
  }, [texts, index, charIndex, deleting])

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-[3px] h-[1em] bg-[#FF6B35] ml-1 animate-pulse align-middle" />
    </span>
  )
}
