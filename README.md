# AI Notes

A personal knowledge base built with [Docusaurus](https://docusaurus.io/), deployed on GitHub Pages at **[ai-profile.github.io/notes](https://ai-profile.github.io/notes/)**.

## What's inside

| Section | Description |
|---------|-------------|
| `/docs/research/` | Technical deep-dives — PDF extraction, OCR engines, pipeline benchmarks |
| `/docs/linkedin/` | Long-form LinkedIn drafts and writing iterations |

## Development

**Requirements:** Node.js ≥ 20

```bash
# Install dependencies
npm install

# Local dev server → http://localhost:3000/notes/
npm run dev

# Production build
npm run build

# Preview production build locally
npm run serve

# Type-check
npm run lint

# Clean build artifacts
npm run clean

# Nuclear clean (incl. node_modules)
npm run clean:all && npm install
```

## Deployment

Push to `main` — GitHub Actions automatically builds and deploys to GitHub Pages.

The deploy workflow is at `.github/workflows/deploy.yml`.

> **Note:** GitHub Pages must be configured to use **GitHub Actions** as the source  
> (Settings → Pages → Source → GitHub Actions)

## Structure

```
ai-profile.github.io/
├── docs/                  # All notes content
│   ├── intro.md           # Welcome page
│   ├── research/          # Technical research docs
│   └── linkedin/          # LinkedIn post drafts
├── src/
│   ├── pages/index.tsx    # Landing page
│   └── css/custom.css     # Design system
├── static/                # Static assets (images, favicon)
├── docusaurus.config.ts   # Site configuration
├── sidebars.ts            # Docs sidebar config
└── .github/workflows/     # GitHub Actions CI/CD
    └── deploy.yml
```

## Tech

- [Docusaurus 3.9](https://docusaurus.io/) — static site generator
- [React 19](https://react.dev/) — UI
- [TypeScript](https://www.typescriptlang.org/) — type safety
- GitHub Actions — CI/CD
- GitHub Pages — hosting
