import { ArrowUpRight } from "lucide-react"

export function ContactForm() {
  return (
    <section className="contact-invitation" aria-labelledby="email-heading">
      <p className="contact-eyebrow">Let's connect</p>
      <h3 id="email-heading">Have something<br />in mind?</h3>
      <p>For an internship, a project, or a chance to learn together, send me a note. Include a little about yourself and what you have in mind.</p>
      <a href="mailto:Rosenayka1@gmail.com" className="contact-email-link">
        Email Rose <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
      </a>
      <p className="contact-email-note">Opens your email app. You can also write directly to <a href="mailto:Rosenayka1@gmail.com">Rosenayka1@gmail.com</a>.</p>
    </section>
  )
}
