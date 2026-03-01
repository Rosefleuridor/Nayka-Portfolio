"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24 pointer-events-none"}`}
      >
        <div className="relative px-4 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-50"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Link href="/" className="font-bold text-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Rose</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Rose</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/Rose-Fleuridor-Resume.pdf" target="_blank">
                <Button
                  size="sm"
                  className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                >
                  Resume
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-white hover:text-purple-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/Rose-Fleuridor-Resume.pdf" target="_blank">
              <Button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0">
                Resume
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
