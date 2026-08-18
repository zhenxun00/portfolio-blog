"use client";

const contributions = [
  { project: "TheAlgorithms/Python", stars: "224k", pr: "#15050", type: "Bug Fix" },
  { project: "PDFMathTranslate", stars: "36k", pr: "#1177", type: "Documentation" },
  { project: "ML-From-Scratch", stars: "32k", pr: "#140", type: "Feature" },
  { project: "sanic", stars: "18.6k", pr: "#3186", type: "Bug Fix" },
  { project: "Logisim Evolution", stars: "7.4k", pr: "#2861", type: "Documentation" },
  { project: "chisel-docs", stars: "Canonical", pr: "#75", type: "Documentation" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <p className="text-muted-foreground">Who I am and what I do.</p>
      </div>

      <div className="space-y-8">
        {/* Bio */}
        <div className="glass rounded-2xl p-8">
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m Zhenxun, a developer interested in building things with code.
            Currently exploring satellite navigation systems, AI applications,
            and web development.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open source projects, or writing technical articles.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Docker", "Linux"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/10 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-4">Open Source Contributions</h2>
          <div className="space-y-3">
            {contributions.map((c) => (
              <div key={c.pr} className="flex items-center justify-between p-3 rounded-xl bg-white/30 dark:bg-white/5">
                <div>
                  <span className="font-medium">{c.project}</span>
                  <span className="text-sm text-muted-foreground ml-2">({c.stars} ⭐)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {c.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{c.pr}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-4">Currently</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Building satellite navigation tools</li>
            <li>Contributing to open source projects (320k+ stars)</li>
            <li>Writing about web development</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="glass rounded-2xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Connect</h2>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/40 transition-all">
              GitHub
            </a>
            <a href="https://twitter.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/40 transition-all">
              Twitter
            </a>
            <a href="mailto:hello@zhenxun.dev" className="glass px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/40 transition-all">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
