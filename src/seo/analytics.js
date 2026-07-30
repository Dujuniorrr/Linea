/**
 * Google Analytics 4 — ativo apenas se VITE_GA_MEASUREMENT_ID estiver definido.
 * Ex.: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 */
export function initAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!id || typeof document === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, { anonymize_ip: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)
}

export function trackPageView(path) {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!id || typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('config', id, { page_path: path })
}
