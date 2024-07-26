import { execSync } from "child_process";
import inquirer from "inquirer";
import path from "path";
import * as fs from "fs-extra";

type Answers = {
  projectName: string;
  framework: "react" | "vue" | "next" | "nuxt";
  uiLibrary: "none" | "tailwindcss" | "antd" | "vuetify";
};

export async function createProject() {
  const answers: Answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Your project name is:",
      default: "demo",
    },
    {
      type: "list",
      name: "framework",
      message: "Choose library/framework:",
      choices: ["react", "vue", "next", "nuxt"],
    },
    {
      type: "list",
      name: "uiLibrary",
      message: "Choose UI library:",
      choices: (answers: { framework: string }) => {
        if (answers.framework === "vue" || answers.framework === "nuxt") {
          return ["none", "tailwindcss", "antd", "vuetify"];
        }
        return ["none", "tailwindcss", "antd"];
      },
    },
  ] as any);

  const projectDir = path.join(process.cwd(), answers.projectName);
  const templateDir = path.join(
    __dirname,
    "..",
    "..",
    "template",
    answers.framework,
    answers.uiLibrary
  );

  try {
    await fs.copy(templateDir, projectDir);
    console.log(`Project ${answers.projectName} created successfully!`);

    process.chdir(projectDir);
    execSync("git init -b init", { stdio: "inherit" });
    execSync("git add .", { stdio: "inherit" });
    execSync('git commit -m "init project"', { stdio: "inherit" });
    console.log("Git repository initialized and initial commit made.");
  } catch (error) {
    console.error("Error creating project:", error);
  }
}
