interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="transition-transform duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <div className="text-center mb-4 font-medium text-lg">{name}</div>

          <div className="relative h-2.5 w-full bg-zinc-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              style={{ width: `${level}%` }}
            />
          </div>

          <div className="mt-2 text-right text-sm text-zinc-400">{level}%</div>
        </div>
      </div>
    </div>
  )
}
