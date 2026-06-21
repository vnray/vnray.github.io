import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    if (isTouch) return

    document.body.style.cursor = 'none'

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let raf = null

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    const onHover = () => {
      ringRef.current?.classList.add('hovering')
      if (dotRef.current) {
        dotRef.current.style.width = '8px'
        dotRef.current.style.height = '8px'
        dotRef.current.style.background = '#f5f5f5'
      }
    }
    const onLeave = () => {
      ringRef.current?.classList.remove('hovering')
      if (dotRef.current) {
        dotRef.current.style.width = '6px'
        dotRef.current.style.height = '6px'
        dotRef.current.style.background = '#FF6B35'
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll(
      'a, button, input, textarea, select, [data-cursor]'
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onHover)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[99999]"
        style={{
          width: '6px',
          height: '6px',
          background: '#FF6B35',
          borderRadius: '50%',
          transform: 'translate(0, 0)',
          transition: 'width 0.15s, height 0.15s, background 0.15s',
          willChange: 'transform',
          left: 0,
          top: 0,
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[99999]"
        style={{
          width: '32px',
          height: '32px',
          border: '1.5px solid rgba(255, 107, 53, 0.3)',
          borderRadius: '50%',
          transform: 'translate(0, 0)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s',
          willChange: 'transform',
          left: '-16px',
          top: '-16px',
        }}
      />
      <style>{`
        .cursor-ring.hovering {
          width: 48px !important;
          height: 48px !important;
          border-color: rgba(255, 107, 53, 0.15) !important;
          background: rgba(255, 107, 53, 0.04) !important;
        }
      `}</style>
    </>
  )
}
