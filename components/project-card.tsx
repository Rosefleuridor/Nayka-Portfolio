import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  status: "In development" | "Live website"
  demoUrl?: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, status, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <article className="project-entry">
      <div className="project-entry-meta">
        <span>Selected work</span>
        <span className={demoUrl ? "project-status-live" : ""}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <ul className="project-technologies" aria-label={`${title} technologies`}>
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="project-actions">
        <Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source on GitHub (opens in new tab)`}>
          <Github aria-hidden="true" className="h-4 w-4" /> View source
        </Link>
        {demoUrl ? (
          <Link className="project-visit" href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title} (opens in new tab)`}>
            Visit website <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        ) : <span className="project-demo-note">Live preview coming later</span>}
      </div>
    </article>
  )
}
