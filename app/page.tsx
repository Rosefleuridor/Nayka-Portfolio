import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Student Developer • Early College STEM Pathway</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Rose-Nayka Fleuridor
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              High school student developer building full-stack projects with React, Node.js, and growing skills in
              Python.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/rosefleuridor" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/rose-naykafleuridor" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>             
              <Link href="mailto:Rosenayka1@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src="/headshot.png"
                  alt="Rose-Nayka Fleuridor"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm currently pursuing my high school diploma at B.M.C. Durfee High School through the Early College
                  STEM Pathway while building hands-on web development experience.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I completed Stanford's Coding in Place program and continue to expand my skills in JavaScript,
                  React, Node.js, and Python by creating real projects.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Outside of coding, I stay active through school leadership and athletics, including Student Advisory
                  Council, Computer Science Club, and Track & Field.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Rose-Nayka Fleuridor</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">Rosenayka1@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Fall River, MA</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to internships and opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/Rose-Fleuridor-Resume.pdf" target="_blank">
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Awards Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <SectionHeading title="Education & Awards" subtitle="Academic path and achievements" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <GlassmorphicCard>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <p className="font-medium text-white">B.M.C. Durfee High School</p>
                  <p>Early College STEM Pathway</p>
                  <p className="text-zinc-400 text-sm">Expected Graduation: 2026</p>
                </div>
                <div>
                  <p className="font-medium text-white">Coding in Place Program</p>
                  <p>Completed coding course and earned certificate</p>
                  <p className="text-zinc-400 text-sm">Year Completed: 2025</p>
                </div>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-xl font-semibold mb-4">Awards & Achievements</h3>
              <ul className="space-y-4 text-zinc-300">
                <li>
                  <p className="font-medium text-white">Coding in Place Certificate (2025)</p>
                  <p>Completed full coding course with projects.</p>
                </li>
                <li>
                  <p className="font-medium text-white">AP Scholar Award (2025)</p>
                  <p>Scored 3 or higher on three or more AP exams.</p>
                </li>
              </ul>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Python" level={50} />
            <SkillBadge name="JavaScript" level={65} />
            <SkillBadge name="HTML" level={75} />
            <SkillBadge name="CSS" level={72} />
            <SkillBadge name="React" level={68} />
            <SkillBadge name="Node.js" level={60} />
            <SkillBadge name="Canva" level={70} />
            <SkillBadge name="Teamwork" level={88} />
            <SkillBadge name="Problem-Solving" level={85} />
            <SkillBadge name="Adaptability" level={84} />
            <SkillBadge name="Organization" level={83} />
            <SkillBadge name="Creativity" level={86} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Work and learning projects from my resume" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <ProjectCard
              title="E-commerce Website"
              description="Building an e-commerce site while practicing full-stack development and deployment workflows."
              tags={["HTML", "CSS", "JavaScript", "React", "Node.js"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/rosefleuridor"
            />
            <ProjectCard
              title="Portfolio Website"
              description="Designed and built a personal portfolio to showcase projects, growth, and technical skills."
              tags={["React", "Next.js", "CSS", "Vercel"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/rosefleuridor"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Experience & Activities" subtitle="Leadership, competition, and school involvement" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Reach out for internships, projects, or collaboration" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                    <div>
                      <div className="text-sm text-zinc-500">Email</div>
                      <div className="font-medium">Rosenayka1@gmail.com</div>
                    </div>
                  </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                    <div>
                      <div className="text-sm text-zinc-500">LinkedIn</div>
                      <div className="font-medium">linkedin.com/in/rose-naykafleuridor</div>
                    </div>
                  </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                    <div>
                      <div className="text-sm text-zinc-500">GitHub</div>
                      <div className="font-medium">github.com/rosefleuridor</div>
                    </div>
                  </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>AP Scholar and Coding in Place certificate holder, currently open to opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Rose</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Rose-Nayka Fleuridor. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/rosefleuridor" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/rose-naykafleuridor" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:Rosenayka1@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
