"use client";

const bdsProject = {
  title: "BDS Satellite Positioning System",
  subtitle: "北斗卫星导航系统定位",
  description: "基于北斗卫星导航系统的单点定位与连续定位实现，包含RINEX解析、卫星位置计算、单点定位、连续定位和GUI可视化界面。",
  github: "https://github.com/zhenxun00/BDS-Positioning",
  tags: ["Python", "NumPy", "Pandas", "Matplotlib", "卫星导航", "GNSS"],
  gradient: "from-cyan-500/80 to-blue-500/80",
  modules: [
    {
      name: "模块1: RINEX文件解析",
      file: "module1_rinex_parsing.py",
      description: "解析北斗卫星导航电文数据，提取卫星星历参数",
      features: [
        "支持RINEX 3.x格式导航电文解析",
        "提取卫星星历参数（轨道根数、时间参数）",
        "数据清洗与Excel导出",
        "卫星健康状态筛选",
      ],
    },
    {
      name: "模块2: 卫星位置计算",
      file: "module2_satellite_position.py",
      description: "基于WGS-84坐标系计算卫星在指定时刻的三维地心直角坐标",
      features: [
        "平均角速度计算",
        "平近点角计算",
        "开普勒方程迭代求解",
        "真近点角计算",
        "轨道平面坐标计算",
        "WGS-84坐标转换",
      ],
    },
    {
      name: "模块3: 单点定位",
      file: "module3_single_point.py",
      description: "使用最小二乘法进行单次定位",
      features: [
        "最小二乘法定位算法",
        "误差方程建立与求解",
        "接收机位置解算",
        "典型精度：2-5米",
      ],
    },
    {
      name: "模块4: 连续定位",
      file: "module4_continuous.py",
      description: "多历元连续定位与轨迹绘制",
      features: [
        "多历元数据处理",
        "定位结果轨迹绘制",
        "精度评估分析",
        "数据可视化",
      ],
    },
    {
      name: "模块5: GUI界面",
      file: "module5_gui.py",
      description: "图形化用户界面",
      features: [
        "交互式操作界面",
        "实时定位显示",
        "结果可视化",
        "数据导入导出",
      ],
    },
  ],
  algorithms: [
    {
      name: "卫星位置计算算法",
      formula: "基于广播星历的开普勒轨道根数计算",
      steps: [
        "计算时间差 tk",
        "计算平均角速度 n = n0 + Δn",
        "计算平近点角 Mk = M0 + n·tk",
        "迭代求解开普勒方程 Ek = Mk + e·sin(Ek)",
        "计算真近点角 fk",
        "计算轨道平面坐标 (x, y)",
        "转换到WGS-84坐标系 (X, Y, Z)",
      ],
    },
    {
      name: "单点定位算法",
      formula: "最小二乘法求解",
      steps: [
        "收集4+颗卫星的伪距观测值",
        "建立观测方程",
        "线性化处理",
        "最小二乘求解接收机位置",
        "迭代优化提高精度",
      ],
    },
  ],
  results: [
    { metric: "解析卫星数", value: "10+颗", icon: "🛰️" },
    { metric: "定位精度", value: "2-5米", icon: "📍" },
    { metric: "代码模块", value: "5个", icon: "📦" },
    { metric: "数据格式", value: "RINEX 3.x", icon: "📊" },
  ],
};

const otherProjects = [
  {
    id: "ai-writing",
    title: "AI Writing Assistant",
    description: "基于AI的写作助手，支持智能续写、语法检查、风格转换。",
    tech: ["React", "TypeScript", "OpenAI"],
    github: "https://github.com/zhenxun00/ai-writing-assistant",
    demo: "https://zhenxun00.github.io/ai-writing-assistant/",
    gradient: "from-purple-500/80 to-pink-500/80",
  },
  {
    id: "dev-dashboard",
    title: "Developer Dashboard",
    description: "开发者数据分析仪表板，集成GitHub统计、技能可视化。",
    tech: ["React", "D3.js", "GitHub API"],
    github: "https://github.com/zhenxun00/dev-dashboard",
    demo: "https://zhenxun00.github.io/dev-dashboard/",
    gradient: "from-green-500/80 to-emerald-500/80",
  },
  {
    id: "collab-docs",
    title: "Collab Docs",
    description: "实时协作文档编辑器，支持多人同时编辑、版本历史。",
    tech: ["Next.js", "Socket.io"],
    github: "https://github.com/zhenxun00/collab-docs",
    demo: "https://zhenxun00.github.io/collab-docs/",
    gradient: "from-blue-500/80 to-indigo-500/80",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    description: "个人财务记账应用，支持分类记账、预算管理。",
    tech: ["React", "Chart.js"],
    github: "https://github.com/zhenxun00/finance-tracker",
    demo: "https://zhenxun00.github.io/finance-tracker/",
    gradient: "from-amber-500/80 to-orange-500/80",
  },
  {
    id: "portfolio-blog",
    title: "Portfolio Blog",
    description: "个人作品集博客，展示项目和技术文章。",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/zhenxun00/portfolio-blog",
    demo: "https://zhenxun00.github.io/portfolio-blog/",
    gradient: "from-pink-500/80 to-rose-500/80",
  },
];

const contributions = [
  {
    project: "TheAlgorithms/Python",
    stars: "224k",
    pr: "#15050",
    title: "cyclic_sort输入验证",
    url: "https://github.com/TheAlgorithms/Python/pull/15050",
    gradient: "from-yellow-500/80 to-orange-500/80",
  },
  {
    project: "PDFMathTranslate",
    stars: "36k",
    pr: "#1177",
    title: "中文文档同步",
    url: "https://github.com/PDFMathTranslate/PDFMathTranslate/pull/1177",
    gradient: "from-red-500/80 to-pink-500/80",
  },
  {
    project: "ML-From-Scratch",
    stars: "32k",
    pr: "#140",
    title: "Transformer实现",
    url: "https://github.com/eriklindernoren/ML-From-Scratch/pull/140",
    gradient: "from-blue-500/80 to-cyan-500/80",
  },
  {
    project: "sanic",
    stars: "18.6k",
    pr: "#3186",
    title: "ASGI异常修复",
    url: "https://github.com/sanic-org/sanic/pull/3186",
    gradient: "from-green-500/80 to-teal-500/80",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-muted-foreground">Things I&apos;ve built and contributed to.</p>
      </div>

      {/* Featured Project: BDS Positioning */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Project</h2>
        <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
          {/* Header */}
          <div className={`w-full h-2 rounded-full bg-gradient-to-r ${bdsProject.gradient} mb-6`} />
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{bdsProject.title}</h3>
              <p className="text-lg text-muted-foreground">{bdsProject.subtitle}</p>
            </div>
            <a
              href={bdsProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/40 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Source Code
            </a>
          </div>

          <p className="text-muted-foreground mb-6">{bdsProject.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {bdsProject.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/10 text-muted-foreground font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {bdsProject.results.map((result) => (
              <div key={result.metric} className="text-center p-4 rounded-xl bg-white/30 dark:bg-white/5">
                <div className="text-2xl mb-1">{result.icon}</div>
                <div className="text-lg font-bold text-primary">{result.value}</div>
                <div className="text-xs text-muted-foreground">{result.metric}</div>
              </div>
            ))}
          </div>

          {/* Modules */}
          <div className="mb-8">
            <h4 className="font-semibold mb-4">项目模块</h4>
            <div className="space-y-3">
              {bdsProject.modules.map((module) => (
                <div key={module.name} className="p-4 rounded-xl bg-white/30 dark:bg-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary font-medium">{module.name}</span>
                    <span className="text-xs text-muted-foreground">({module.file})</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {module.features.map((feature) => (
                      <span key={feature} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Algorithms */}
          <div>
            <h4 className="font-semibold mb-4">核心算法</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {bdsProject.algorithms.map((algo) => (
                <div key={algo.name} className="p-4 rounded-xl bg-white/30 dark:bg-white/5">
                  <h5 className="font-medium mb-2">{algo.name}</h5>
                  <p className="text-xs text-primary mb-2">{algo.formula}</p>
                  <ol className="text-xs text-muted-foreground space-y-1">
                    {algo.steps.map((step, i) => (
                      <li key={i}>{i + 1}. {step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/50 dark:bg-white/10 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Source Contributions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Open Source Contributions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {contributions.map((contrib) => (
            <a
              key={contrib.pr}
              href={contrib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all block"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${contrib.gradient} mb-4`} />
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{contrib.project}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 font-medium">
                  ⭐ {contrib.stars}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{contrib.title}</p>
              <p className="text-xs text-muted-foreground mt-2">PR {contrib.pr}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
