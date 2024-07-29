import path from "path";
import * as fs from "fs-extra";

export const generateModule = async (moduleName?: string) => {
  const projectDir = process.cwd();

  const modulesDir = path.join(projectDir, "modules", moduleName);

  try {
    if (!fs.existsSync(modulesDir)) {
      await fs.mkdir(modulesDir, { recursive: true });
    }

    const fileContents = getFileContents(moduleName);

    await fs.mkdir(path.join(modulesDir, "pages"));
    await Promise.all([
      fs.writeFile(path.join(modulesDir, "routes.ts"), fileContents.routesFile),
      fs.writeFile(path.join(modulesDir, "index.ts"), fileContents.indexFile),
      fs.writeFile(
        path.join(modulesDir, "pages", "index.vue"),
        fileContents.indexPageFile
      ),
    ]);
    console.log("Module %s had been created successfully", moduleName);
  } catch (error) {
    console.log("Error when creating module %s: ", moduleName, error);

    await fs.remove(modulesDir);
  }
};

const getFileContents = (moduleName: string) => {
  const routesFile = `
export const ${moduleName}ModuleRoutes = {
  index: '/${moduleName}',
};
`;

  const indexFile = `
import { defineNuxtModule } from 'nuxt/kit';
import { resolve } from 'path';
import { ${moduleName}ModuleRoutes } from './routes';

export default defineNuxtModule({
  setup(resolvedOptions, nuxt) {
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        path: ${moduleName}ModuleRoutes.index,
        file: resolve(__dirname, './pages/index.vue'),
      });
    });
  },
});
`;

  const indexPageFile = `
<template>
   <h1>${moduleName} page</h1>
</template>
  `;

  return {
    routesFile,
    indexFile,
    indexPageFile,
  };
};
