# Portfólio · Francisco Silveira

Next.js 15 (App Router) + TypeScript. Sem dependências de UI: CSS próprio com tokens e tema claro/escuro.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Onde editar

- `data/content.ts`: todo o texto, projetos, links. Em cada projeto, preencha `demo` (URL online) e `image` (ex.: `/projetos/delivery.png`, 16:9, salve em `public/projetos/`). Sem imagem, aparece uma capa gerada.
- `app/globals.css`: cores e tipografia (tokens no topo).
- `components/`: uma seção por componente.

## Deploy (Vercel)

Importe o repositório na Vercel. Opcional: defina `NEXT_PUBLIC_SITE_URL` com seu domínio (usado no sitemap e nas prévias de compartilhamento). O CI do GitHub roda lint, typecheck e build a cada push.
