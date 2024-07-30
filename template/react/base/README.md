# React boilerplate

A template for React project with typescript and vite, generate from [vite-cli](https://vitejs.dev/guide/cli) with initial features:

- Navigation with [react-router-dom](https://reactrouter.com/en/main)
- Internationalization with [react-i18next](https://react.i18next.com/latest/using-with-hooks)
- HTTP API communication with [axios](https://axios-http.com/vi/docs/intro)
- Global store with [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Code productivity tools: [eslint](https://eslint.org), [prettier](https://prettier.io), [lint-staged](https://www.npmjs.com/package/lint-staged) and [husky](https://www.npmjs.com/package/husky)

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
