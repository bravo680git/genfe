#!/usr/bin/env node

import { Command } from "commander";
import { createProject } from "./commands/create";
import { generateModule } from "./commands/generateModule";
const program = new Command();
program
  .command("create")
  .description("Create a new project")
  .action(createProject);

program
  .command("gm <name>")
  .description("Create a new module for nuxt project with modules directory")
  .action(generateModule);

program.parse(process.argv);
