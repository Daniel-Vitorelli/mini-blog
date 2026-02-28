# Teste Técnico – Estágio Front-end  
Mini blog estático com conteúdo + anúncios fake + regras básicas de compliance

## Descrição do projeto
Este projeto consiste em um mini blog estático desenvolvido em Next.js, contendo uma home, uma landing page e dois artigos informativos.  
O objetivo é demonstrar organização de código, atenção a regras de compliance, estrutura de páginas e cuidado com conteúdo e layout responsivo.

O projeto **não utiliza back-end nem banco de dados**, sendo todo o conteúdo estático.

## Tecnologias utilizadas
- Next.js
- React
- TypeScript
- Tailwind
- Shadcn
- Magic ui

## Estrutura do projeto
```
├── app
│   ├── fotos
│   │   └── page.tsx
│   ├── landing-page
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── landing-page
│   │   ├── ArticleSection.tsx
│   │   ├── PatternDivider.tsx
│   │   └── divider.tsx
│   ├── ui
│   │   ├── animated-grid-pattern.tsx
│   │   ├── animated-theme-toggler.tsx
│   │   ├── aurora-text.tsx
│   │   ├── button.tsx
│   │   ├── flickering-grid.tsx
│   │   ├── interactive-hover-button.tsx
│   │   ├── retro-grid.tsx
│   │   ├── separator.tsx
│   │   ├── shiny-button.tsx
│   │   └── tooltip.tsx
│   ├── AdBlock.tsx
│   ├── BlogCard.tsx
│   ├── BlogTemplate.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MobileButtons.tsx
│   ├── Navbar.tsx
│   ├── Readmore.tsx
│   └── theme-provider.tsx
├── data
│   └── card-content.ts
├── lib
│   └── utils.ts
└── public
    └── images
        ├── Backup.png
        └── GooglePhotos.png
```

## Blocos de anúncio fake
- Tamanho fixo: 350x300
- Conteúdo apenas visual, exemplo:

  “Publicidade — 350x300”
  “Anúncio (simulado)”
- Regras aplicadas:
  - Não há botões, links ou imagens clicáveis próximos
  - Existe espaçamento acima e abaixo
  - Sempre posicionados logo após o primeiro parágrafo

## Regras de compliance atendidas
- ✔ Contagem de palavras respeitada (artigos e landing page)
- ✔ Anúncio fake posicionado corretamente
- ✔ Nenhum elemento clicável colado ao anúncio
- ✔ Botões com textos específicos e claros
- ✔ Rótulo abaixo de todos os botões informando o tipo de navegação
- ✔ Links externos claramente identificados

## Responsividade
- Layout adaptado para dispositivos móveis
- Testado em resoluções desktop e mobile
- Navegação simples e intuitiva

## Como Acessar o Site
Ele esta disponível no link: 

## Como executar o projeto localmente
1. Clone o repositório:
```Cmd
exemplo
```

2. Acesse a pasta do projeto:
```Cmd
cd mini-blog
```

3. Instale as dependências:
```Cmd
npm install
```

4. Execute o projeto:
```Cmd
npm run dev
```

4. Abra no navegador:
```
http://localhost:3000
```