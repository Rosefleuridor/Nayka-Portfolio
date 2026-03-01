interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center space-y-4">
      <div>
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2">
            <span className="relative z-10">{subtitle}</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
          </div>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
        {title}
      </h2>

      <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-6" />
    </div>
  )
}
