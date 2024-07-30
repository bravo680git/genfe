import * as fs from "fs-extra";
import path from "path";

export const writeFileWithInjection = async (
  sourceFile: string,
  destFile: string,
  injectionMap?: Record<string, string>
) => {
  let fileContent: string;
  try {
    fileContent = await fs.readFile(sourceFile, "utf8");
  } catch (error) {
    console.log("Error when reading file %s: ", sourceFile, error);
    throw error;
  }

  if (injectionMap) {
    Object.entries(injectionMap).forEach(([key, value]) => {
      fileContent = fileContent.replace(
        new RegExp(`\{\{\{\s*${key}\s*\}\}\}`, "g"),
        value
      );
    });
  }

  try {
    await fs.outputFile(destFile, fileContent);
  } catch (error) {
    console.log("Error when writing file %s: ", sourceFile, error);
    throw error;
  }
};

export const processDirectory = async (
  sourceDir: string,
  destDir: string,
  injectionMap?: Record<string, string>
) => {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name.replace(".txt", ""));

    if (entry.isDirectory()) {
      await fs.ensureDir(destPath);
      await processDirectory(sourcePath, destPath, injectionMap);
    } else {
      await writeFileWithInjection(sourcePath, destPath, injectionMap);
    }
  }
};
