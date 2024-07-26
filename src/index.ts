#!/usr/bin/env node

import { Command } from "commander";
import { createProject } from "./commands/create";
const program = new Command();
program
  .command("create")
  .description("Create a new project")
  .action(createProject);

program.parse(process.argv);
