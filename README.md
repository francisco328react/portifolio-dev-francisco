# Portfólio · Francisco Silveira

Site pessoal de portfólio, feito com **Next.js 15 (App Router)**, **React 19** e **TypeScript**. Apresenta perfil, projetos, experiência, tecnologias, formação e contato, com tema claro/escuro e uma página de currículo pronta para imprimir ou salvar em PDF.

O projeto não usa biblioteca de UI nem Tailwind: o visual é CSS próprio, organizado em variáveis (tokens) no arquivo `app/globals.css`.

## Sumário

1. [Visão geral](#visão-geral)
2. [Tecnologias](#tecnologias)
3. [Como rodar localmente](#como-rodar-localmente)
4. [Scripts disponíveis](#scripts-disponíveis)
5. [Estrutura de pastas](#estrutura-de-pastas)
6. [Como editar o conteúdo](#como-editar-o-conteúdo)
7. [Como mudar o visual](#como-mudar-o-visual)
8. [Subir para o GitHub](#subir-para-o-github)
9. [Publicar na Vercel](#publicar-na-vercel)
10. [Variáveis de ambiente](#variáveis-de-ambiente)
11. [Qualidade, acessibilidade e SEO](#qualidade-acessibilidade-e-seo)
12. [Solução de problemas](#solução-de-problemas)

## Visão geral

| Rota | O que mostra |
| --- | --- |
| `/` | Página principal: topo, sobre mim, projetos, experiência, tecnologias, formação e contato. |
| `/curriculo` | Currículo completo em formato de documento. O botão "Salvar como PDF" abre a impressão do navegador. |
| `/sitemap.xml` e `/robots.txt` | Gerados automaticamente para os buscadores. |
| `/opengraph-image` | Imagem de prévia exibida quando o link é compartilhado (WhatsApp, LinkedIn etc.). |

Destaques do projeto:

- **Conteúdo separado do layout.** Todos os textos, links e projetos ficam em um único arquivo, `data/content.ts`.
- **Componentes pequenos.** Cada seção da página é um componente em `components/`.
- **Tema claro e escuro.** Segue o tema do sistema na primeira visita e lembra a escolha do visitante, sem piscar a tela ao carregar.
- **Menu fixo** que destaca a seção que está na tela.
- **Projetos em destaque** com capa, tecnologias, link do código e link do projeto online (quando existir). Os demais ficam em uma lista "Em desenvolvimento" com barra de andamento.
- **Capa gerada automaticamente** em SVG para projetos que ainda não têm captura de tela.

## Tecnologias

- Next.js 15.1 (App Router) e React 19
- TypeScript 5 (modo `strict`)
- `next/font` com Bricolage Grotesque (títulos) e Instrument Sans (texto)
- ESLint (`next/core-web-vitals` e `next/typescript`) e Prettier
- GitHub Actions para integração contínua

## Como rodar localmente

Pré-requisitos: **Node.js 18.18 ou superior** (recomendado: 22) e npm.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. A página recarrega sozinha quando você salva um arquivo.

Para testar a versão de produção:

```bash
npm run build
npm run start
```

## Scripts disponíveis

| Comando | Para que serve |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção (a Vercel usa este comando). |
| `npm run start` | Serve a versão gerada pelo `build`. |
| `npm run lint` | Verifica problemas de código com o ESLint. |
| `npm run typecheck` | Verifica os tipos do TypeScript sem gerar arquivos. |
| `npm run format` | Formata todo o projeto com o Prettier. |

## Estrutura de pastas

```text
.
├── app/
│   ├── layout.tsx            # HTML base, fontes, metadados, tema e dados estruturados
│   ├── page.tsx              # Página principal (junta os componentes)
│   ├── globals.css           # Todo o CSS e os tokens de cor
│   ├── curriculo/page.tsx    # Página do currículo (versão para impressão)
│   ├── opengraph-image.tsx   # Imagem de prévia ao compartilhar o link
│   ├── sitemap.ts            # sitemap.xml
│   ├── robots.ts             # robots.txt
│   └── icon.svg              # Ícone da aba do navegador
├── components/
│   ├── Header.tsx            # Menu fixo com seção ativa (client)
│   ├── ThemeToggle.tsx       # Botão de tema claro/escuro (client)
│   ├── Hero.tsx              # Topo com nome, botões e a faixa dos rios
│   ├── About.tsx · Projects.tsx · Experience.tsx
│   ├── Skills.tsx · Education.tsx · Contact.tsx · Footer.tsx
│   ├── ProjectCard.tsx       # Card de projeto em destaque
│   ├── Cover.tsx             # Capa SVG gerada quando não há imagem
│   ├── Section.tsx           # Moldura padrão de cada seção
│   └── PrintButton.tsx       # Botão "Salvar como PDF" (client)
├── data/
│   └── content.ts            # TODO o conteúdo do site (edite aqui)
├── lib/
│   └── site.ts               # URL do site (usada em sitemap, robots e metadados)
├── public/
│   └── projetos/             # Coloque aqui as capturas de tela dos projetos
└── .github/workflows/ci.yml  # Lint, typecheck e build a cada push
```

Os arquivos marcados como "client" usam interatividade no navegador. Todo o resto é renderizado no servidor, o que deixa a página leve e boa para SEO.

## Como editar o conteúdo

Quase tudo se altera em **`data/content.ts`**:

| Quero mudar... | Edite... |
| --- | --- |
| Nome, cargo, cidade, e-mail, links e WhatsApp | `profile` |
| Texto do "Sobre mim" | `profile.about` e `profile.open` |
| Tecnologias | `skills` |
| Experiência profissional | `experience` |
| Experiência de suporte | `support` |
| Projetos | `projects` |
| Formação, certificações e idiomas | `education`, `certs`, `languages` |

### Adicionar ou atualizar um projeto

Cada projeto segue este formato:

```ts
{
  name: "Delivery Track Pro",
  tech: ["TypeScript", "Fullstack"],
  desc: "Sistema fullstack para gestão de entregas e entregadores.",
  repo: "https://github.com/francisco328react/Delivery-track-pro",
  progress: 60,                      // andamento estimado, de 0 a 100
  featured: true,                    // true = aparece como card em destaque
  demo: "https://meu-projeto.vercel.app",  // opcional: link do projeto online
  image: "/projetos/delivery.png",         // opcional: captura de tela
}
```

Dicas:

- **Destaque só o que estiver mais bem acabado.** Projetos com `featured: true` viram cards grandes; os outros ficam na lista "Em desenvolvimento".
- **Capturas de tela:** salve a imagem em `public/projetos/` (proporção 16:9, por exemplo 1280×720) e informe o caminho em `image`. Sem `image`, o site mostra uma capa gerada.
- **Link do projeto online:** projetos com `demo` ganham o botão "Ver online". Para quem avalia o portfólio, isso costuma pesar mais do que qualquer outro detalhe.

### Alterar o WhatsApp

Em `profile.whatsapp`, ajuste `display` (como o número aparece) e `url`. O formato do link é `https://wa.me/55DDDNÚMERO`, e a mensagem inicial fica no parâmetro `text` (já codificada para URL).

### Currículo em PDF

A página `/curriculo` usa os mesmos dados de `data/content.ts`, então ela se atualiza junto com o site. Para gerar o arquivo, abra a página, clique em "Salvar como PDF" e escolha "Salvar como PDF" como destino da impressão.

## Como mudar o visual

As cores ficam no topo de `app/globals.css`, em duas listas: uma para o tema claro (`:root`) e outra para o escuro (`[data-theme="dark"]`).

| Variável | Uso |
| --- | --- |
| `--bg` | Fundo da página |
| `--surface` | Fundo de cards e etiquetas |
| `--ink` e `--muted` | Texto principal e texto secundário |
| `--line` | Linhas e bordas |
| `--accent` | Sublinhado dos links |
| `--fill` e `--on-fill` | Botões principais e seu texto |
| `--negro` e `--solimoes` | Cores da faixa do topo (Rio Negro e Rio Solimões) |

A identidade visual é inspirada no Encontro das Águas, em Manaus: o verde-escuro do Rio Negro e o tom de areia do Solimões. Para trocar as fontes, altere os imports de `next/font/google` em `app/layout.tsx`.

## Subir para o GitHub

```bash
git init
git add .
git commit -m "feat: portfólio inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Crie o repositório vazio no GitHub antes (sem README, sem .gitignore), e troque a URL do comando `git remote add` pela do seu repositório.

## Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e entre com a sua conta do GitHub.
2. Clique em **Add New… → Project** e escolha o repositório do portfólio.
3. Mantenha as configurações padrão. A Vercel reconhece o Next.js sozinha (build: `npm run build`).
4. Clique em **Deploy**. Em cerca de um minuto o site estará no ar em um endereço `*.vercel.app`.

A partir daí, cada `git push` na branch `main` publica uma nova versão automaticamente. Para usar um domínio próprio, vá em **Settings → Domains** no painel do projeto.

## Variáveis de ambiente

| Nome | Obrigatória | Para que serve |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Não | Endereço público do site (ex.: `https://seudominio.com`). Usado no sitemap, no robots e nas prévias de compartilhamento. |

Se ela não for definida, o projeto usa o endereço de produção que a Vercel informa; em desenvolvimento, usa `http://localhost:3000`. Se você usar domínio próprio, defina essa variável em **Settings → Environment Variables** na Vercel.

## Qualidade, acessibilidade e SEO

- **CI:** o arquivo `.github/workflows/ci.yml` roda `lint`, `typecheck` e `build` a cada push e pull request. Se algo quebrar, você vê o aviso no GitHub antes de publicar.
- **Acessibilidade:** HTML semântico, link "Pular para o conteúdo", foco visível no teclado, menu com `aria-current`, medidores com descrição para leitores de tela e animação desativada para quem prefere menos movimento.
- **SEO e compartilhamento:** título e descrição, Open Graph e Twitter Card com imagem gerada, `sitemap.xml`, `robots.txt` e dados estruturados do tipo `Person` (schema.org).
- **Ainda não incluído:** testes automatizados e formulário de contato. O contato é feito por WhatsApp, e-mail e LinkedIn.

## Solução de problemas

- **`next build` falha ao baixar as fontes:** as fontes do Google são baixadas no build, então é preciso ter internet. Na Vercel isso já funciona.
- **A imagem do projeto não aparece:** confira se o arquivo está em `public/projetos/` e se o caminho em `image` começa com `/projetos/`, com a mesma grafia do nome do arquivo.
- **O tema escuro não muda:** o tema escolhido fica salvo no navegador. Limpe o armazenamento do site ou clique de novo no botão de tema.
- **O link compartilhado não mostra a prévia:** defina `NEXT_PUBLIC_SITE_URL` com o endereço real do site e publique de novo. Redes sociais guardam prévias em cache, então pode levar um tempo para atualizar.
- **O ESLint reclama de formatação:** rode `npm run format` e tente de novo.
