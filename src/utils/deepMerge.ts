import * as fs from "fs-extra";
import path from "path";

export const deepMerge = async (sourceDir: string, destDir: string) => {
  try {
    if (!(await fs.pathExists(sourceDir))) {
      throw new Error(`Source directory ${sourceDir} does not exist.`);
    }

    const items = await fs.readdir(sourceDir);

    for (const item of items) {
      const sourcePath = path.join(sourceDir, item);
      const destPath = path.join(destDir, item);

      const stat = await fs.stat(sourcePath);
      if (stat.isDirectory()) {
        await fs.ensureDir(destPath);
        await deepMerge(sourcePath, destPath);
      } else {
        await fs.copy(sourcePath, destPath, { overwrite: true });
      }
    }
  } catch (error) {
    console.error(`Error during merging: `, error);
  }
};
