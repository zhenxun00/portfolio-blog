"use client";

const projects = [
  {
    id: "ai-writing",
    title: "AI Writing Assistant",
    description: "An intelligent writing tool powered by OpenAI that helps you write better content with real-time suggestions, grammar checking, and style conversion.",
    features: [
      "Smart content continuation based on context",
      "Real-time grammar and spelling correction",
      "Style conversion (formal, casual, academic)",
      "Markdown export support",
      "Multi-language support",
    ],
    tags: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/zhenxun00/ai-writing-assistant",
    demo: "https://ai-writing.zhenxun.dev",
    image: "/projects/ai-writing.png",
  },
  {
    id: "collab-docs",
    title: "Real-time Collab Docs",
    description: "A collaborative document editor similar to Google Docs, featuring real-time synchronization, rich text editing, and version history.",
    features: [
      "WebSocket-based real-time collaboration",
      "Rich text editor with formatting options",
      "Version history and rollback",
      "Shareable document links",
      "Offline support with sync",
    ],
    tags: ["Next.js", "Socket.io", "Slate.js", "PostgreSQL"],
    github: "https://github.com/zhenxun00/collab-docs",
    demo: "https://docs.zhenxun.dev",
    image: "/projects/collab-docs.png",
  },
  {
    id: "dev-dashboard",
    title: "Developer Dashboard",
    description: "A comprehensive developer analytics dashboard that visualizes your GitHub activity, skills, and project contributions in beautiful charts.",
    features: [
      "GitHub contribution heatmap",
      "Language distribution charts",
      "Skill radar visualization",
      "Project timeline",
      "Real-time data sync",
    ],
    tags: ["React", "D3.js", "GitHub API", "Chart.js"],
    github: "https://github.com/zhenxun00/dev-dashboard",
    demo: "https://dashboard.zhenxun.dev",
    image: "/projects/dev-dashboard.png",
  },
  {
    id: "finance-tracker",
    title: "Personal Finance Tracker",
    description: "A beautiful personal finance management app with categorization, budget tracking, and data visualization to help you manage your money wisely.",
    features: [
      "Income/expense categorization",
      "Interactive charts and graphs",
      "Monthly budget management",
      "Data export (CSV/JSON)",
      "Local storage for privacy",
    ],
    tags: ["React", "Chart.js", "LocalStorage", "TypeScript"],
    github: "https://github.com/zhenxun00/finance-tracker",
    demo: "https://finance.zhenxun.dev",
    image: "/projects/finance-tracker.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of projects I&apos;ve built to solve real-world problems and explore new technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {projects.map((project, i) => (
          <article
            key={project.id}
            id={project.id}
            className={`group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all animate-fade-in delay-${(i + 1) * 100}`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Content */}
              <div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Placeholder for project image */}
              <div className="rounded-xl bg-muted flex items-center justify-center min-h-[250px]">
                <div className="text-center text-muted-foreground">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
