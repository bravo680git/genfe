# Nuxt 3 Boilerplate

A template for a Nuxt 3 project (only CSR), generated from [nuxi-cli](https://nuxt.com/docs/getting-started/installation) with the following initial features:

- Internationalization with [nuxt-i18n](https://i18n.nuxtjs.org/docs/getting-started)
- HTTP API communication with [axios](https://axios-http.com/vi/docs/intro)
- Global store with [nuxt-pinia](https://pinia.vuejs.org/ssr/nuxt.html)
- Code productivity tools: [eslint](https://eslint.org), [prettier](https://prettier.io), [lint-staged](https://www.npmjs.com/package/lint-staged) and [husky](https://www.npmjs.com/package/husky)
- UI library: [antd-vue](https://antdv.com/components/overview)

## Directory Structure

- `assets`: Static files of the app such as styles, images, fonts, etc.
- `config`: Configuration files for the app
- `language`: Translation files for internationalization
- `layout`: Nuxt layout folder
- `middleware`: Nuxt middleware folder
- `modules`: contains the application's modules, each module is a folder containing folders of that module such as pages, components, utils,...
- `public`: Public files for the app
- `services`: Manage interactions with external services such as APIs and sockets
- `stores`: App global store

## Running the Project

1. Create a `.env.local` file, copy, and declare all variables from `.env.dist`.
2. Run the following commands in the terminal:
   - With npm: `npm i && npm run dev`
   - With yarn: `yarn && yarn dev`
   - With pnpm: `pnpm i && pnpm dev`
