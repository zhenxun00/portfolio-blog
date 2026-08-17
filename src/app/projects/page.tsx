"use client";

const projects = [
  {
    id: "bds-positioning",
    title: "BDS Satellite Positioning",
    description: "北斗卫星导航系统定位实现，包含RINEX解析、卫星位置计算、单点定位与连续定位。",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/zhenxun00/BDS-Positioning",
    color: "bg-cyan-500",
  },
  {
    id: "ai-writing",
    title: "AI Writing Assistant",
    description: "基于AI的写作助手，支持智能续写、语法检查、风格转换和Markdown导出。",
    tech: ["React", "TypeScript", "OpenAI"],
    github: "https://github.com/zhenxun00/ai-writing-assistant",
    demo: "https://zhenxun00.github.io/ai-writing-assistant/",
    color: "bg-purple-500",
  },
  {
    id: "dev-dashboard",
    title: "Developer Dashboard",
    description: "开发者数据分析仪表板，集成GitHub统计、技能可视化、语言分布图表。",
    tech: ["React", "D3.js", "GitHub API"],
    github: "https://github.com/zhenxun00/dev-dashboard",
    demo: "https://zhenxun00.github.io/dev-dashboard/",
    color: "bg-green-500",
  },
  {
    id: "collab-docs",
    title: "Collab Docs",
    description: "实时协作文档编辑器，支持多人同时编辑、版本历史和分享链接。",
    tech: ["Next.js", "Socket.io"],
    github: "https://github.com/zhenxun00/collab-docs",
    demo: "https://zhenxun00.github.io/collab-docs/",
    color: "bg-blue-500",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    description: "个人财务记账应用，支持分类记账、预算管理和数据可视化。",
    tech: ["React", "Chart.js"],
    github: "https://github.com/zhenxun00/finance-tracker",
    demo: "https://zhenxun00.github.io/finance-tracker/",
    color: "bg-yellow-500",
  },
  {
    id: "portfolio-blog",
    title: "Portfolio Blog",
    description: "个人作品集博客，展示项目和技术文章。",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/zhenxun00/portfolio-blog",
    demo: "https://zhenxun00.github.io/portfolio-blog/",
    color: "bg-pink-500",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-10">Things I&apos;ve built.</p>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="p-5 rounded-lg border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {project.title.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-medium">{project.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 ml-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      Source
                    </a>
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
