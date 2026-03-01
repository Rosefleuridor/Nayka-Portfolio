import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rose-Nayka Fleuridor | Portfolio',
  description:
    'Portfolio of Rose-Nayka Fleuridor, a student developer building full-stack projects with React, Node.js, and Python.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
