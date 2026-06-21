import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMouse = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onHover = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setHovering(true)
      } else setHovering(false)
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('mouseover', onHover)
    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseover', onHover)
    }
  }, [visible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: hovering ? 48 : 8,
          height: hovering ? 48 : 8,
          borderRadius: '50%',
          background: hovering
            ? 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)'
            : 'rgba(168,85,247,0.8)',
          border: hovering ? '1px solid rgba(168,85,247,0.3)' : 'none',
          transform: `translate(-50%, -50%) scale(${hovering ? 1.3 : 1})`,
          mixBlendMode: hovering ? 'normal' : 'difference',
          opacity: visible ? 1 : 0,
          transition: 'width 0.3s, height 0.3s, opacity 0.3s, background 0.3s, transform 0.2s',
        }}
      />
      <style>{`
        body { cursor: none !important; }
        a, button, [role="button"], input, textarea { cursor: none !important; }
      `}</style>
    </>
  )
}
