"use client"

import { useEffect, useRef } from "react"

export function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)")
    if (coarsePointer.matches) return

    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    let rafId = 0
    let visible = false
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }

    const render = () => {
      current.x += (target.x - current.x) * 0.2
      current.y += (target.y - current.y) * 0.2

      cursor.style.transform = `translate3d(${current.x - 16}px, ${current.y - 16}px, 0)`
      dot.style.transform = `translate3d(${target.x - 1}px, ${target.y - 1}px, 0)`
      cursor.style.opacity = visible ? "1" : "0"
      dot.style.opacity = visible ? "1" : "0"

      rafId = requestAnimationFrame(render)
    }

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      visible = true
    }

    const handleMouseLeave = () => {
      visible = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
      >
        <div className="w-full h-full rounded-full bg-white opacity-50"></div>
      </div>

      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-50"
      />
    </>
  )
}
