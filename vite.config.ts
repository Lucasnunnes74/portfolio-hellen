import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

// A URL pública vem de VITE_SITE_URL (ex.: domínio próprio) ou, se ela não existir,
// da URL que a Vercel/Netlify informam durante o build.
function resolveSiteUrl(env: Record<string, string>): string {
  const vercelHost = env.VERCEL_PROJECT_PRODUCTION_URL
  const netlifyUrl = env.NETLIFY ? env.URL : ''
  const url = env.VITE_SITE_URL || (vercelHost ? `https://${vercelHost}` : '') || netlifyUrl || ''
  return url.replace(/\/+$/, '')
}

// Open Graph, canonical e JSON-LD precisam de URLs absolutas.
// Em index.html elas aparecem como __SITE_URL__ e são trocadas aqui.
// Sem URL conhecida (ex.: npm run dev), viram caminhos relativos, que funcionam localmente.
function siteUrlPlugin(siteUrl: string): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const siteUrl = resolveSiteUrl(loadEnv(mode, process.cwd(), ''))
  return {
    plugins: [react(), siteUrlPlugin(siteUrl)],
  }
})
