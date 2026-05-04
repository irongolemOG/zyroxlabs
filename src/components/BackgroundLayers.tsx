'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundLayers() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 1. Particle Canvas (fixed background)
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    const isMob = window.innerWidth < 640
    const N = isMob ? 0 : 70 // skip on mobile for perf
    let W = 0, H = 0
    let pts: any[] = []
    let animFrameId: number

    function resize() {
      if (!c) return
      W = c.width = window.innerWidth
      H = c.height = window.innerHeight
    }

    function init() {
      resize()
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
        r: Math.random() * 1.4 + .4,
        a: Math.random() * .5 + .1
      }))
    }

    function tick() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(130,140,248,${p.a})`
        ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(99,102,241,${.1 * (1 - d / 110)})`
            ctx.lineWidth = .5
            ctx.stroke()
          }
        }
      }
      animFrameId = requestAnimationFrame(tick)
    }

    window.addEventListener('resize', resize, { passive: true })
    init()
    tick()

    // 2. Cursor Glow (desktop only)
    const cg = cgRef.current
    let mx = 0, my = 0, cgx = 0, cgy = 0
    let cgAnimId: number
    
    function onMouseMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
      if (cg) cg.style.opacity = '1'
    }

    function animCg() {
      cgx += (mx - cgx) * .07
      cgy += (my - cgy) * .07
      if (cg) {
        cg.style.left = cgx + 'px'
        cg.style.top = cgy + 'px'
      }
      cgAnimId = requestAnimationFrame(animCg)
    }

    if (window.innerWidth > 640 && cg) {
      document.addEventListener('mousemove', onMouseMove, { passive: true })
      animCg()
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animFrameId)
      if (window.innerWidth > 640 && cg) {
        document.removeEventListener('mousemove', onMouseMove)
        cancelAnimationFrame(cgAnimId)
      }
    }
  }, [])

  return (
    <>
      <div id="bg-noise"></div>
      <div id="bg-grid"></div>
      <canvas id="bg-canvas" ref={canvasRef}></canvas>
      <div id="cg" ref={cgRef}></div>
    </>
  )
}
