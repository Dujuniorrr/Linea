# Linea Engenharia e Arquitetura

Site institucional em Vue 3 + Vite, com nova identidade visual e conteúdo migrado de [linea.eng.br](http://linea.eng.br/).

## URLs de origem mapeadas

| Original | Nova rota |
| --- | --- |
| `/about.aspx` / `/Default.aspx` | `/` |
| `/services.aspx` | `/projetos` |
| `/services.aspx` + galerias | `/projetos/:slug` |
| `/page8.aspx` | `/complementares` |
| `/page8.aspx` + galerias | `/complementares/:slug` |
| `/page2.aspx` | `/clientes` |
| `/contact.aspx` | `/contato` |

A base de conteúdo tipado fica em `src/data/content.js`. Imagens das galerias em `src/assets/images/gallery/`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
