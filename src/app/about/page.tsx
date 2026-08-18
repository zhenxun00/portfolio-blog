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
      <h1 className="text-3xl font-bold mb-2">About</h1>
      <p className="text-muted-foreground mb-10">Who I am and what I do.</p>

      <div className="space-y-8 text-muted-foreground">
        {/* Bio */}
        <section>
          <p>
            I&apos;m Zhenxun, a developer interested in building things with code.
            Currently exploring satellite navigation systems, AI applications,
            and web development.
          </p>
          <p className="mt-4">
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open source projects, or writing technical articles.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Docker", "Linux"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-muted text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Open Source Contributions */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Open Source Contributions</h2>
          <div className="space-y-3">
            {contributions.map((c) => (
              <div key={c.pr} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <span className="font-medium">{c.project}</span>
                  <span className="text-sm ml-2">({c.stars} ⭐)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {c.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{c.pr}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Currently */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Currently</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Building satellite navigation tools</li>
            <li>Contributing to open source projects (320k+ stars)</li>
            <li>Writing about web development</li>
          </ul>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Connect</h2>
          <div className="flex gap-4">
            <a href="https://github.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>
            <a href="https://twitter.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Twitter
            </a>
            <a href="mailto:hello@zhenxun.dev" className="text-primary hover:underline">
              Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
