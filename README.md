# Portfolio Blog

A modern, minimalist personal portfolio and blog built with Next.js 14, Tailwind CSS, and TypeScript.

![Portfolio Blog](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 🎨 **Minimalist Design** - Clean, modern aesthetic inspired by Apple
- 🌙 **Dark/Light Mode** - Automatic theme switching with system preference
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Fast Performance** - Optimized with Next.js App Router
- 🔍 **SEO Optimized** - Built-in metadata and Open Graph support
- 📝 **Blog Ready** - MDX support for technical articles
- 🎯 **Project Showcase** - Beautiful project cards with live demos

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: CSS Animations
- **Icons**: Custom SVG Icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/zhenxun00/portfolio-blog.git

# Navigate to the project
cd portfolio-blog

# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🏗️ Project Structure

```
portfolio-blog/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── blog/
│   │   │   └── page.tsx      # Blog listing
│   │   ├── projects/
│   │   │   └── page.tsx      # Projects showcase
│   │   └── about/
│   │       └── page.tsx      # About page
│   └── components/
│       ├── Navbar.tsx        # Navigation bar
│       ├── Footer.tsx        # Footer
│       └── ThemeProvider.tsx # Theme context
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Colors

Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #2563eb;      /* Primary color */
  --primary-hover: #1d4ed8; /* Primary hover */
  /* ... */
}
```

### Content

Update the content in each page file to personalize your portfolio:

- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About me section
- `src/app/projects/page.tsx` - Project details
- `src/app/blog/page.tsx` - Blog posts

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with featured projects and latest posts |
| **Blog** | Technical articles and tutorials |
| **Projects** | Showcase of personal projects |
| **About** | Bio, skills, and experience |

## 🚀 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zhenxun00/portfolio-blog)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a PR.

## 📬 Contact

- **GitHub**: [zhenxun00](https://github.com/zhenxun00)
- **Twitter**: [@zhenxun00](https://twitter.com/zhenxun00)
- **Email**: hello@zhenxun.dev

---

Built with ❤️ using Next.js & Tailwind CSS
