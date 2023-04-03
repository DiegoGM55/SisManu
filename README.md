# SisManu
O Sistema de Manutenção da Moradia Estudantil é uma aplicação que tem como objetivo gerenciar os chamados de manutenção para as casas da moradia estudantil da faculdade. Com ele, os moradores podem reportar problemas em suas casas e os funcionários da faculdade podem rastrear e resolver os chamados.

# Requisitos Funcionais
- Registro de chamados: os moradores devem poder registrar seus chamados no sistema. O sistema deve coletar informações como o tipo de problema, a localização da casa, e outras informações relevantes.

- Rastreamento de chamados: o sistema deve permitir que os funcionários da faculdade possam visualizar os chamados registrados e seu status (por exemplo, aberto, em andamento ou concluído).

- Gerenciamento de estoque: o sistema deve ser capaz de controlar o estoque de peças e suprimentos necessários para realizar os reparos. Deve ser possível registrar o recebimento de novos itens, bem como as baixas de estoque.

- Histórico de manutenção: o sistema deve manter um histórico dos reparos realizados em cada casa. Isso pode incluir informações como a data do reparo, o tipo de reparo, quais itens foram usados e quem realizou o trabalho.

- Notificação para o morador: o sistema deve notificar o morador quando o problema reportado for resolvido. As notificações podem ser enviadas por meio de e-mail, mensagem de texto ou notificação no próprio sistema.

Requisitos Não-Funcionais
- Segurança: o sistema deve garantir a privacidade dos dados dos usuários e proteger contra acesso não autorizado.

- Usabilidade: o sistema deve ser fácil de usar, com uma interface intuitiva e instruções claras.

- Performance: o sistema deve ser rápido e responsivo, com tempos de resposta baixos mesmo em momentos de pico de uso.

Tecnologias Utilizadas
O Sistema de Manutenção da Moradia Estudantil foi desenvolvido utilizando as seguintes tecnologias:

  Linguagem de programação: React com Typescript
  Banco de dados: 
  Framework: Next JS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
