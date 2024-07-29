import { execSync } from "child_process";
import inquirer from "inquirer";
import path from "path";
import * as fs from "fs-extra";

const FRAMEWORKS = ["react", "vue", "next", "nuxt"] as const;
const REACT_UI_LIBRARIES = ["none", "tailwindcss", "antd"] as const;
const VUE_UI_LIBRARIES = ["none", "tailwindcss", "antd", "vuetify"] as const;

type Frameworks = (typeof FRAMEWORKS)[number];
type UiLibraries = (typeof VUE_UI_LIBRARIES)[number];

type Answers = {
  projectName: string;
  framework: Frameworks;
  uiLibrary: UiLibraries;
  modulesDir?: boolean;
  initGit: boolean;
  initCommitMsg: string;
};

const getQuestion = (projectName?: string) => {
  return [
    {
      type: "input",
      name: "projectName",
      message: "Your project name is:",
      default: "demo",
      when() {
        return !projectName;
      },
    },
    {
      type: "list",
      name: "framework",
      message: "Choose library/framework:",
      choices: FRAMEWORKS,
    },
    {
      type: "list",
      name: "uiLibrary",
      message: "Choose UI library:",
      choices: (answers: Answers) => {
        if (answers.framework === "vue" || answers.framework === "nuxt") {
          return VUE_UI_LIBRARIES;
        }
        return REACT_UI_LIBRARIES;
      },
    },
    {
      type: "confirm",
      name: "modulesDir",
      message: "With modules structure: ",
      default: false,
      when(answers: Answers) {
        return answers.framework === "nuxt";
      },
    },
    {
      type: "confirm",
      name: "initGit",
      message: "Init git repository: ",
      default: true,
    },
    {
      type: "input",
      name: "initCommitMsg",
      message: "Init commit message:",
      default: "Init project",
      when(answers: Answers) {
        return answers.initGit;
      },
    },
  ] as any;
};

export async function createProject(name?: string) {
  const answers: Answers = await inquirer.prompt(getQuestion(name));

  if (name) {
    answers.projectName = name;
  }

  const projectDir = path.join(process.cwd(), answers.projectName);
  const templateDir = path.join(__dirname, "..", "..", "template");
  const uiTemplateDir = path.join(
    templateDir,
    answers.framework,
    answers.uiLibrary
  );

  try {
    await fs.copy(uiTemplateDir, projectDir);

    if (answers.framework === "nuxt" && answers.modulesDir) {
      await withModulesDir(projectDir, templateDir);
    }
    console.log(`Project ${answers.projectName} created successfully!`);

    if (answers.initGit) {
      process.chdir(projectDir);
      execSync("git init -b init", { stdio: "inherit" });
      execSync("git add .", { stdio: "inherit" });
      execSync(`git commit -m "${answers.initCommitMsg}"`, {
        stdio: "inherit",
      });
      console.log("Git repository initialized and initial commit made.");
    }
  } catch (error) {
    await fs.remove(projectDir);
    console.error("Error creating project:", error);
  }
}

const withModulesDir = async (projectDir: string, templateDir: string) => {
  if (process.cwd() !== projectDir) {
    process.chdir(projectDir);
  }

  const moduleTemplateDir = path.join(templateDir, "nuxt", "_modules_dir");
  await Promise.all([
    fs.remove(path.join(projectDir, "router")),
    fs.remove(path.join(projectDir, "pages")),
    fs.copy(
      path.join(moduleTemplateDir, "middleware"),
      path.join(projectDir, "middleware"),
      {
        overwrite: true,
      }
    ),
    fs.copy(
      path.join(moduleTemplateDir, "modules"),
      path.join(projectDir, "modules")
    ),
    fs.copy(
      path.join(moduleTemplateDir, "README.md"),
      path.join(projectDir, "README.md")
    ),
  ]);
};
