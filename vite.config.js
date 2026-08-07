import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

/** Evita directory listing em /assets no hosting. */
function disableAssetsListing() {
  return {
    name: 'disable-assets-listing',
    closeBundle() {
      const dir = join(process.cwd(), 'dist', 'assets')
      mkdirSync(dir, { recursive: true })
      writeFileSync(
        join(dir, 'index.html'),
        `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta http-equiv="refresh" content="0;url=/" /><title>Linea</title><link rel="canonical" href="https://www.linea.eng.br/" /></head><body><p><a href="/">Voltar ao início</a></p></body></html>\n`,
      )
    },
  }
}

/**
 * Descobre o CSS cedo (preload + link no <head>) e tira-o da cadeia crítica HTML→JS→CSS.
 * O CSS do Vite costuma ficar depois do <script type="module">; isso atrasa LCP.
 */
function optimizeCssDelivery() {
  return {
    name: 'optimize-css-delivery',
    enforce: 'post',
    transformIndexHtml(html) {
      const assetStyles = []
      const withoutAssetCss = html.replace(
        /<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi,
        (tag) => {
          if (!/\/assets\/[^"']+\.css/i.test(tag)) return tag
          assetStyles.push(tag)
          return ''
        },
      )

      if (!assetStyles.length) return withoutAssetCss

      const early = assetStyles
        .map((tag) => {
          const href = tag.match(/href=["']([^"']+)["']/i)?.[1]
          if (!href) return tag
          const crossorigin = /\bcrossorigin\b/i.test(tag) ? ' crossorigin' : ''
          return `<link rel="preload" as="style" href="${href}"${crossorigin} />\n    ${tag}`
        })
        .join('\n    ')

      // Descoberta o mais cedo possível (após viewport), em paralelo ao JS
      if (/<meta\s+name=["']viewport["'][^>]*>/i.test(withoutAssetCss)) {
        return withoutAssetCss.replace(
          /<meta\s+name=["']viewport["'][^>]*>/i,
          (meta) => `${meta}\n    ${early}`,
        )
      }

      if (withoutAssetCss.includes('<script type="module"')) {
        return withoutAssetCss.replace(
          /<script type="module"/,
          `${early}\n    <script type="module"`,
        )
      }

      return withoutAssetCss.replace('</head>', `    ${early}\n  </head>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      webp: { quality: 78 },
    }),
    optimizeCssDelivery(),
    disableAssetsListing(),
  ],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    allowedHosts: ['kiera-nonsubordinating-sherice.ngrok-free.dev'],
  },
})
