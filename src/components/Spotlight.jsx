import { useEffect, useState } from 'react'

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: `radial-gradient(800px circle at ${pos.x}px ${pos.y}px, rgba(255, 107, 53, 0.035), transparent 40%)`,
        transition: 'background 0.1s',
      }}
    />
  )
}
