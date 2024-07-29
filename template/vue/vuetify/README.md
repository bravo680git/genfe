# Vue 3 boilerplate

A template for Vue 3 project with typescript and vite, generate from [vue-cli](https://vuejs.org/guide/scaling-up/tooling.html) with initial features:

- Navigation with [vue-router](https://router.vuejs.org/)
- Internationalization with [vue-i18n](https://vue-i18n.intlify.dev/)
- HTTP API communication with [axios](https://axios-http.com/vi/docs/intro)
- Global store with [pinia](https://pinia.vuejs.org/)
- Code productivity tools: [eslint](https://eslint.org), [prettier](https://prettier.io), [lint-staged](https://www.npmjs.com/package/lint-staged) and [husky](https://www.npmjs.com/package/husky)
- Style: [Vuetify](https://vuetifyjs.com/en/)

## Directory structure(src)
- `assets`: Static files of the app such as styles, images, fonts, etc.
- `components`: App components
- `config`: Configuration files for the app
- `language`: Translation files for internationalization
- `pages`: Nuxt pages folder
- `router`: Files related to app routing
- `services`: Manage interactions with external services such as APIs and sockets
- `stores`: App global store
- `utils`: Utilities files such as constants, helper, type,...

## Run project

- Create a .env.local file, copy and declare all variables from .env.dist
- Run command in terminal
  - With npm `npm i && npm run dev`
  - With yarn `yarn && yarn dev`
  - With pnpm `pnpm i && pnpm dev`
