"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <header className="portfolio-header" onKeyDown={(event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }}>
      <div className="portfolio-header-inner">
        <Link href="/" className="portfolio-wordmark" aria-label="Rose home">Rose<span aria-hidden="true">.</span></Link>
        <button ref={toggleRef} className="portfolio-menu-toggle" type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="portfolio-navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="portfolio-navigation" className={`portfolio-navigation${isOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.name}</Link>)}
          <Link href="/Rose-Fleuridor-Resume.pdf" className="portfolio-resume" target="_blank" rel="noopener noreferrer" aria-label="Resume (opens in new tab)">Resume ↗</Link>
        </nav>
      </div>
    </header>
  )
}
