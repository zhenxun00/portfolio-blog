"use client";

const projects = [
  {
    id: "ai-writing",
    title: "AI Writing Assistant",
    description: "An intelligent writing tool powered by AI that helps you write better content with real-time suggestions, grammar checking, and style conversion.",
    features: [
      "Smart content continuation based on context",
      "Real-time grammar and spelling correction",
      "Style conversion (formal, casual, academic)",
      "Markdown export support",
    ],
    tags: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/zhenxun00/ai-writing-assistant",
    demo: "https://zhenxun00.github.io/ai-writing-assistant/",
    icon: "✨",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "collab-docs",
    title: "Real-time Collab Docs",
    description: "A collaborative document editor featuring real-time synchronization, rich text editing, and version history.",
    features: [
      "WebSocket-based real-time collaboration",
      "Rich text editor with formatting options",
      "Version history and rollback",
      "Shareable document links",
    ],
    tags: ["Next.js", "Socket.io", "Slate.js"],
    github: "https://github.com/zhenxun00/collab-docs",
    demo: "https://zhenxun00.github.io/collab-docs/",
    icon: "📝",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "dev-dashboard",
    title: "Developer Dashboard",
    description: "A comprehensive developer analytics dashboard that visualizes your GitHub activity, skills, and project contributions.",
    features: [
      "GitHub contribution heatmap",
      "Language distribution charts",
      "Skill radar visualization",
      "Project timeline",
    ],
    tags: ["React", "D3.js", "GitHub API", "Chart.js"],
    github: "https://github.com/zhenxun00/dev-dashboard",
    demo: "https://zhenxun00.github.io/dev-dashboard/",
    icon: "📊",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "finance-tracker",
    title: "Personal Finance Tracker",
    description: "A beautiful personal finance management app with categorization, budget tracking, and data visualization.",
    features: [
      "Income/expense categorization",
      "Interactive charts and graphs",
      "Monthly budget management",
      "Data export (CSV/JSON)",
    ],
    tags: ["React", "Chart.js", "LocalStorage", "TypeScript"],
    github: "https://github.com/zhenxun00/finance-tracker",
    demo: "https://zhenxun00.github.io/finance-tracker/",
    icon: "💰",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of projects I&apos;ve built to solve real-world problems and explore new technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}>
                    {project.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
