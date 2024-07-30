# NextJs boilerplate

A template for NextJs project( App router, not support SSR ), generate from [next-cli](https://nextjs.org/docs/app/api-reference/next-cli) with initial features:

- Internationalization with custom hook
- HTTP API communication with [axios](https://axios-http.com/vi/docs/intro)
- Global store with [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Code productivity tools: [eslint](https://eslint.org), [prettier](https://prettier.io), [lint-staged](https://www.npmjs.com/package/lint-staged) and [husky](https://www.npmjs.com/package/husky)

## Directory structure(src)
- `app`: NextJs app router folder
- `hooks`: Custom hooks
- `language`: Translation files for internationalization
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
