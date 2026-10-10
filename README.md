# Portfólio · Hellen Almeida

Site de portfólio profissional de uma página (one-page), em português do Brasil, para Hellen Almeida, Analista de Logística.

Feito com **React 19 + TypeScript + Vite** e **CSS puro** (CSS Modules). Sem Tailwind e sem bibliotecas de UI; os ícones são SVG inline.

## Como rodar

```bash
npm install        # só na primeira vez
npm run dev        # desenvolvimento, em http://localhost:5173
npm run build      # confere o TypeScript e gera a pasta dist/
npm run preview    # serve o build de dist/ para conferir antes de publicar
npm run lint       # análise de código
```

## Estrutura

```
public/            imagens, favicon e currículo (ficam na raiz do site: /foto-hellen.jpg ...)
src/
  data/            todo o conteúdo do site, tipado com interfaces (types.ts)
  components/      componentes, cada um com seu .module.css
  hooks/           useInView (animação ao rolar), useActiveSection (menu), useScrolled
  styles/          tokens.css (cores, fontes, espaços) e base.css (reset e utilitários)
  utils/           funções pequenas (classNames, getInitials)
index.html         título, descrição, Open Graph, Twitter Card e dados estruturados (JSON-LD)
```

Os componentes só renderizam o que vem de `src/data`. Textos de interface, como rótulos de acessibilidade ("Abrir menu"), ficam nos próprios componentes.

## Como trocar textos

| O que mudar | Onde |
| --- | --- |
| Nome, cargo, frase do início, resumo (Sobre), e-mail, telefone, LinkedIn, texto dos botões | `src/data/profile.ts` |
| Competências (grupos e etiquetas) | `src/data/skills.ts` |
| Experiência | `src/data/experience.ts` |
| Formação | `src/data/education.ts` |
| Itens do menu e títulos das seções | `src/data/navigation.ts` |
| Cores, fonte, espaçamentos | `src/styles/tokens.css` |
| Título da aba, descrição, Open Graph, Twitter Card, JSON-LD | `index.html` |

O botão flutuante de WhatsApp usa o número e a mensagem inicial definidos no topo de `profile.ts` (`whatsappNumber` e `whatsappMessage`). O número vai só com dígitos, incluindo o 55 do Brasil e o DDD.

Na experiência, mantenha do cargo mais recente para o mais antigo. Quando uma empresa tem mais de um cargo (como a Lojas Renner), o site mostra automaticamente a **progressão de carreira**.

O JSON-LD do `index.html` repete nome, cargo, cidade, e-mail e LinkedIn. Se mudar algum desses dados em `profile.ts`, atualize também lá.

## Como trocar fotos e o currículo

Tudo o que está em `public/` é publicado e acessado pelo caminho absoluto (ex.: `/foto-hellen.jpg`).

| Arquivo | Uso |
| --- | --- |
| `public/foto-hellen.jpg` | Foto do início. Use um retrato na vertical (proporção entre 3:4 e 4:5, ex.: 1086×1448). Se o arquivo não existir, aparece um monograma "HA". |
| `public/og-image.jpg` | Imagem que aparece ao compartilhar o link (WhatsApp, LinkedIn...). Tamanho 1200×630. |
| `public/favicon.png` | Ícone da aba do navegador (quadrado). |
| `public/curriculo-hellen-almeida.pdf` | Arquivo do botão "Baixar currículo". Para atualizar, substitua mantendo o nome. |

Para trocar qualquer um, basta substituir o arquivo mantendo o mesmo nome. Se preferir outro nome, ajuste o caminho em `src/data/profile.ts` (`photo.src` e `resume.href`).

## Como publicar

O site é estático: a pasta `dist/` gerada por `npm run build` é tudo o que precisa ser publicada.

**Vercel**
1. Envie o projeto para o GitHub.
2. Em vercel.com, escolha **Add New → Project** e importe o repositório. A Vercel detecta o Vite (build `npm run build`, saída `dist`).
3. Clique em **Deploy**.

**Netlify**
1. Envie o projeto para o GitHub.
2. Em app.netlify.com, escolha **Add new site → Import an existing project** e selecione o repositório.
3. Confirme: comando `npm run build`, pasta de publicação `dist`. Clique em **Deploy**.
4. Alternativa sem GitHub: rode `npm run build` e arraste a pasta `dist/` em app.netlify.com/drop.

### Link de compartilhamento (Open Graph)

As tags `og:image`, `canonical` e o JSON-LD precisam de endereço absoluto. No build, o endereço vem de:

1. `VITE_SITE_URL`, se definida (use para domínio próprio, por exemplo `https://seudominio.com.br`, sem barra no final). Configure em **Settings → Environment Variables** da Vercel/Netlify ou num arquivo `.env.production` (há um modelo em `.env.example`);
2. a URL de produção que a Vercel ou a Netlify informam sozinhas durante o build.

Sem nenhuma das duas, os endereços ficam relativos: funciona no site, mas WhatsApp e LinkedIn podem não exibir a imagem de compartilhamento.

## Acessibilidade e desempenho

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`), link "Pular para o conteúdo", foco visível e navegação completa por teclado. O menu do celular fecha com Esc.
- Visual sempre claro, mesmo com o aparelho no modo escuro, e cores com contraste AA.
- Animações de entrada com IntersectionObserver, desativadas para quem prefere menos movimento (`prefers-reduced-motion`).
- Mobile-first, de 320 px a telas grandes, sem rolagem horizontal.
