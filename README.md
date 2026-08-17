# Portfolio Blog

A modern, minimalist personal portfolio and blog built with Next.js 14, Tailwind CSS, and TypeScript.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

## Live Demo

🔗 **[https://zhenxun00.github.io/portfolio-blog/](https://zhenxun00.github.io/portfolio-blog/)**

## Features

- 🎨 **Modern Design** - Clean, gradient-accented UI with dark mode support
- 📱 **Responsive** - Works on all devices (mobile, tablet, desktop)
- 📝 **Blog** - MDX-ready blog with article pages
- 🚀 **Fast** - Static generation for blazing fast load times
- 🔍 **SEO Optimized** - Built-in meta tags and Open Graph support

## Pages

| Page | Description |
|------|-------------|
| [Home](https://zhenxun00.github.io/portfolio-blog/) | Hero section, featured projects, latest posts |
| [Projects](https://zhenxun00.github.io/portfolio-blog/projects) | Showcase of all projects |
| [Blog](https://zhenxun00.github.io/portfolio-blog/blog) | Technical articles and tutorials |
| [About](https://zhenxun00.github.io/portfolio-blog/about) | Personal bio and skills |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## Getting Started

```bash
# Clone the repository
git clone https://github.com/zhenxun00/portfolio-blog.git

# Install dependencies
cd portfolio-blog
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
portfolio-blog/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/page.tsx   # Blog post pages
│   │   ├── projects/
│   │   │   └── page.tsx          # Projects showcase
│   │   └── about/
│   │       └── page.tsx          # About page
│   └── components/
│       ├── Navbar.tsx            # Navigation bar
│       ├── Footer.tsx            # Footer
│       └── ThemeProvider.tsx     # Dark mode provider
└── package.json
```

## Customization

1. Edit `src/app/page.tsx` to update home page content
2. Edit `src/app/projects/page.tsx` to add your projects
3. Edit `src/app/blog/page.tsx` to add your blog posts
4. Edit `src/app/about/page.tsx` to update your bio

## Deployment

Deploy to GitHub Pages:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## License

MIT

## Author

**Zhenxun** - [GitHub](https://github.com/zhenxun00) - [Twitter](https://twitter.com/zhenxun00)
