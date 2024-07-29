# genfe CLI

A command-line interface (CLI) tool for quickly generating and managing front-end projects with various frameworks and UI libraries.

## Installation

To install the CLI globally, use npm:

```bash
npm install -g genfe
```

Or use npx without installation:

```bash
npx genfe <command>
```

Or use locally:

- Clone source into your computer
- Run in terminal:

```bash
npm i -g pnpm #If you had pnpm or use other package managers, skip this command
pnpm i
pnpm build
pnpm start <command> [params]
```

## Usage

### \* Create Command

The create command initializes a new project with the specified framework and UI library.

#### Syntax

```bash
genfe create
```

#### Options

- projectName: The name of your project.
- framework: The library/framework to use (react, vue, next, nuxt).
- uiLibrary: The UI library to use (none, tailwindcss, antd, vuetify).
- modulesDir: (Optional) Whether to use a modules directory structure (only for nuxt).
- initGit: Initialize a git repository.
- initCommitMsg: Initial commit message.

#### Example

```bash
genfe create
```

You will be prompted to enter the project details interactively.

### \* gm Command

The gm command generates a new module within your project.

#### Syntax

```bash
genfe gm <moduleName>
```

#### Options

- moduleName: The name of the module to create.

#### Example

```bash
genfe gm user
```

This will generate a new module named user with predefined structure and files.

#### Directory Structure

After creating a module, the directory structure will look something like this:

```
project-name/
│
├── modules/
│ └── moduleName/
│     ├── pages/
│     │ └── index.vue
│     ├── routes.ts
│     └── index.ts
├── ...
```
