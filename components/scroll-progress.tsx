"use client"

import { useState, useEffect } from "react"

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId = 0

    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const nextProgress = maxScroll > 0 ? scrollTop / maxScroll : 0
        setProgress(nextProgress)
        setIsVisible(scrollTop > 100)
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
      style={{
        transform: `scaleX(${progress})`,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 300ms ease",
      }}
    />
  )
}
