"use client"

import { useEffect, useRef } from "react"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let rafId = 0
    let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
    let width = 0
    let height = 0
    const pointer = { x: -9999, y: -9999 }

    const setCanvasDimensions = () => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    type Particle = {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      density: number
      color: string
    }

    const particlesArray: Particle[] = []
    const gridSize = 34
    let numX = 0
    let numY = 0

    function init() {
      particlesArray.length = 0
      numX = Math.max(1, Math.floor(width / gridSize))
      numY = Math.max(1, Math.floor(height / gridSize))

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          const hue = Math.random() * 60 + 270
          particlesArray.push({
            x: posX,
            y: posY,
            baseX: posX,
            baseY: posY,
            size: Math.random() * 2 + 1.8,
            density: Math.random() * 18 + 6,
            color: `hsl(${hue}, 70%, 60%)`,
          })
        }
      }
    }

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }

    const handlePointerLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    const handleResize = () => {
      setCanvasDimensions()
      init()
    }

    setCanvasDimensions()
    init()
    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handlePointerMove)
    canvas.addEventListener("mouseleave", handlePointerLeave)

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]
        const dx = pointer.x - p.x
        const dy = pointer.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 95

        if (!reducedMotion && distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          p.x -= (dx / Math.max(distance, 0.1)) * force * (p.density * 0.24)
          p.y -= (dy / Math.max(distance, 0.1)) * force * (p.density * 0.24)
        } else {
          p.x += (p.baseX - p.x) * 0.08
          p.y += (p.baseY - p.y) * 0.08
        }

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()

        // Draw only local grid connections to avoid O(n^2) work.
        const right = i + 1
        const below = i + numX
        const diag = i + numX + 1
        if ((i + 1) % numX !== 0 && right < particlesArray.length) {
          drawLine(p, particlesArray[right])
        }
        if (below < particlesArray.length) {
          drawLine(p, particlesArray[below])
        }
        if ((i + 1) % numX !== 0 && diag < particlesArray.length) {
          drawLine(p, particlesArray[diag])
        }
      }

      rafId = requestAnimationFrame(renderFrame)
    }

    const drawLine = (from: Particle, to: Particle) => {
      const dx = from.x - to.x
      const dy = from.y - to.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance > gridSize * 1.6) return

      ctx.beginPath()
      ctx.strokeStyle = `rgba(180, 120, 255, ${0.14 - distance / 400})`
      ctx.lineWidth = 0.5
      ctx.moveTo(from.x, from.y)
      ctx.lineTo(to.x, to.y)
      ctx.stroke()
    }

    if (reducedMotion) {
      renderFrame()
      cancelAnimationFrame(rafId)
    } else {
      rafId = requestAnimationFrame(renderFrame)
    }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handlePointerMove)
      canvas.removeEventListener("mouseleave", handlePointerLeave)
    }
  }, [])

  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </div>
  )
}
