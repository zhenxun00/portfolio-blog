"use client";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"] },
  { category: "AI/ML", items: ["OpenAI API", "TensorFlow", "PyTorch", "LangChain"] },
  { category: "DevOps", items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"] },
];

const timeline = [
  {
    year: "2026",
    title: "Full-Stack Developer",
    company: "Freelance",
    description: "Building modern web applications and AI-powered tools for clients worldwide.",
  },
  {
    year: "2025",
    title: "Open Source Contributor",
    company: "GitHub",
    description: "Contributing to popular open source projects including DevBoard and Logisim Evolution.",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    company: "Tech Startup",
    description: "Developed responsive web applications using React and TypeScript.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          I&apos;m a passionate developer who loves building things that make a difference.
        </p>
      </div>

      {/* Bio Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi! I&apos;m Zhenxun, a full-stack developer with a passion for creating elegant solutions to complex problems.
                I specialize in building modern web applications with a focus on user experience and performance.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects,
                or writing technical articles to share my knowledge with the community.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest trends in technology,
                especially in the fields of AI and web development.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center text-muted-foreground">
              <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-sm">Your Photo Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold mb-4 text-primary">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div key={item.year} className={`flex gap-6 animate-fade-in delay-${(i + 1) * 100}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {item.year.slice(2)}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-primary mb-2">{item.company}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I&apos;m always open to new opportunities and interesting conversations.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:hello@zhenxun.dev"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/zhenxun00"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
