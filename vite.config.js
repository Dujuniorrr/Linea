import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
        `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta http-equiv="refresh" content="0;url=/" /><title>Linea</title><link rel="canonical" href="https://linea.eng.br/" /></head><body><p><a href="/">Voltar ao início</a></p></body></html>\n`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), disableAssetsListing()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    allowedHosts: ['kiera-nonsubordinating-sherice.ngrok-free.dev'],
  },
})
