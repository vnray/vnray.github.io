import { useRef, useState } from 'react'

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      x: (y - 0.5) * -8,
      y: (x - 0.5) * 8,
    })
    setGlow({ x: x * 100, y: y * 100 })
  }

  const onLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlow({ x: 50, y: 50 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      <div
        className="relative transition-all duration-200 ease-out"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          willChange: 'transform',
        }}
      >
        {children}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255, 107, 53, 0.06), transparent 50%)`,
          }}
        />
      </div>
    </div>
  )
}
