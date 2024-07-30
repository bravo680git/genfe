import * as fs from "fs-extra";
import path from "path";
import { getTemplateDir } from "../utils";
import { processDirectory } from "../utils/writeFileWithInjection";

export const generateModule = async (moduleName?: string) => {
  const projectDir = process.cwd();

  const modulesDir = path.join(projectDir, "modules", moduleName);
  const templateDir = path.join(getTemplateDir(), "_create_module");

  try {
    if (!fs.existsSync(modulesDir)) {
      await fs.mkdir(modulesDir, { recursive: true });
    }

    await processDirectory(templateDir, modulesDir, {
      moduleName,
    });
    console.log("Module %s had been created successfully", moduleName);
  } catch (error) {
    console.log("Error when creating module %s: ", moduleName, error);

    await fs.remove(modulesDir);
  }
};
