# Portfolio Website (Static)

A fully static, responsive portfolio built with Next.js static export. All content lives in a single data file so updates are fast and safe.

## Quick start

```bash
npm install
npm run dev
```

## Update resume content

Edit `src/data/resume.ts`:
- Update summary, about, skills, experience, projects, and contact links.
- Adjust `theme.fontPreset` to switch typography (options: `inter`, `spaceGrotesk`, `montserrat`).
- Update color tokens under `theme` to change accent and surface colors.

## Replace images

Drop your images into `public/images/` and keep the same file names:
- `headshot.png`
- `project-1.png` ... `project-6.png`
- `gallery-1.png` ... `gallery-3.png`

Update the image paths in `resume.ts` if you rename files.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml`.

- Push to `main` to trigger deployment.
- The build sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` for GitHub Pages.
- If you use a custom domain, set `NEXT_PUBLIC_BASE_PATH` to empty in the workflow.

## Notes

- No backend or server is required.
- The export output lives in `out/` after `npm run build`.
