import { GitHubIcon } from "@/components/icons/github"
import { LinkedInIcon } from "@/components/icons/linkedin"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"

export const Route = createFileRoute("/")({ component: Home })

const projects = [
  {
    name: "EkoLibrary",
    slug: "ekolibrary",
    year: "2024",
    description:
      "A structured database and reference library for biological entities. Browse, search, and explore detailed profiles of organisms with taxonomic classification, habitat data, and ecological relationships.",
    tags: ["Database", "Biology", "Reference"],
    status: "active",
    href: "#",
  },
]

const stack = [
  { label: "C++", note: "systems & performance" },
  { label: "C#", note: "backend & tooling" },
  { label: "Python", note: "scripting & data" },
  { label: "TypeScript", note: "frontend & fullstack" },
  { label: "Rust", note: "when it matters" },
  { label: "Docker", note: "infra & deployment" },
  { label: "PostgreSQL", note: "data persistence" },
  { label: "Linux", note: "where code lives" },
]

const links = [
  { label: "GitHub", href: "https://github.com/andrej2431", icon: GitHubIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Email", href: "mailto:andrej2431@gmail.com", icon: Mail },
]

const approach = [
  {
    title: "Built to last",
    body: "Code written for longevity. Every decision considered against the question: will this still make sense in three years?",
  },
  {
    title: "Full-stack depth",
    body: "From low-level systems in C++ to production infrastructure in Docker — comfortable owning the entire chain.",
  },
  {
    title: "Pragmatic craft",
    body: "Engineering is problem-solving. The best solution is rarely the most elaborate one. Clarity, performance, reliability — in that order.",
  },
]

// Entrance animation (tw-animate-css, ships with shadcn). Delay is passed inline per element.
const fadeUp =
  "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-700 ease-out"
const fadeIn = "animate-in fade-in fill-mode-backwards duration-700"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {children}
      </h2>
      <Separator className="flex-1" />
    </div>
  )
}

function Home() {
  return (
    <div className="relative min-h-screen bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-size-[48px_48px]">
      {/* Logo */}
      <div className="absolute m-10 w-30">
        <img src="gourd.png" alt="Logo" className="h-auto w-full object-cover" />
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 h-87.5 w-175 -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_70%)]"
      />

      <main className="relative mx-auto max-w-5xl px-6 py-2 md:px-16 md:py-32">
        {/* Header */}
        <section className="mb-28">
          <div
            className={`${fadeIn} mb-5 flex items-center gap-2 font-mono text-xs text-muted-foreground`}
          >
            <span className="text-primary opacity-70">$</span>
            <span>
              whoami
              <span className="ml-px animate-pulse text-primary">|</span>
            </span>
          </div>

          <h1
            className={`${fadeUp} mb-6 font-heading text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl`}
            style={{ animationDelay: "80ms" }}
          >
            Andrej Thomas
            <br />
            <span className="text-muted-foreground/50">Dobrev</span>
          </h1>

          <p
            className={`${fadeUp} mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg`}
            style={{ animationDelay: "160ms" }}
          >
            Software engineer building systems that outlast their deadlines.
            Fluent in C++, C#, Python, and TypeScript — comfortable at every
            layer of the stack, from embedded logic to production
            infrastructure.
          </p>

          <div
            className={`${fadeUp} flex flex-wrap items-center gap-6`}
            style={{ animationDelay: "240ms" }}
          >
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="relative flex items-center gap-2 text-sm text-muted-foreground transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-28">
          <SectionLabel>Projects</SectionLabel>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <a
                key={project.slug}
                href={project.href}
                className={`${fadeUp} group block`}
                style={{ animationDelay: `${300 + i * 80}ms` }}
              >
                <Card className="relative h-full gap-0 overflow-hidden py-0 transition-colors group-hover:border-border/60 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-br before:from-primary/5 before:to-transparent before:to-60% before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100">
                  {/* Accent line */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100"
                  />

                  <CardHeader className="flex-row items-start justify-between gap-4 px-6 pt-6 pb-3">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-medium text-foreground">
                          {project.name}
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground/40">
                          {project.year}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs ${
                          project.status === "active"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            project.status === "active"
                              ? "animate-pulse bg-primary"
                              : "bg-muted-foreground"
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="mt-0.5 shrink-0 text-muted-foreground/30 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-sm font-mono text-xs font-normal text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="mb-28">
          <SectionLabel>Stack</SectionLabel>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
            {stack.map(({ label, note }, i) => (
              <div
                key={label}
                className={`${fadeUp} bg-card px-5 py-4 transition-colors hover:bg-muted`}
                style={{ animationDelay: `${400 + i * 40}ms` }}
              >
                <div className="mb-0.5 font-mono text-sm font-medium text-foreground">
                  {label}
                </div>
                <div className="text-xs text-muted-foreground/60">{note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-28">
          <SectionLabel>Approach</SectionLabel>

          <div className="grid gap-8 md:grid-cols-3">
            {approach.map(({ title, body }, i) => (
              <div
                key={title}
                className={fadeUp}
                style={{ animationDelay: `${400 + i * 80}ms` }}
              >
                <div className="mb-3 h-px w-8 bg-primary/40" />
                <h3 className="mb-2 text-sm font-medium text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={fadeUp} style={{ animationDelay: "400ms" }}>
          <SectionLabel>Contact</SectionLabel>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Open to interesting problems. Reach out if you want to build
              something worth building.
            </p>
            <a
              href="mailto:andrej2431@gmail.com"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              andrej2431@gmail.com
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex items-center justify-between border-t border-border pt-8 font-mono text-xs text-muted-foreground/40">
          <span>Andrej Thomas Dobrev</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  )
}