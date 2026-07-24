// Prefixes a root-relative public asset path (e.g. "/Resume.pdf") with Vite's
// configured base path, so links/images resolve correctly when the site is
// hosted under a subpath (e.g. GitHub Pages project sites).
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
