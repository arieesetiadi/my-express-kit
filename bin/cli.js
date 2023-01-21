#!/usr/bin/env node

import fs from "fs";
import { execSync } from "child_process";

const runCommand = (command) => {
    try {
        execSync(command, { stdio: "inherit" });
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }
    return true;
};

const repoName = process.argv[2];

// Cloning command
console.log(`Cloning the repository  with name ${repoName}`);
const cloneCommand = `git clone --depth 1 https://github.com/ariesetiadi-sm/my-express-kit.git ${repoName}`;
const cloned = runCommand(cloneCommand);
if (!cloned) process.exit(-1);

// Degit / remove .git directory
const degitCommand = `rm -rf !$/.git`;
const degit = runCommand(degitCommand);
if (!degit) process.exit(-1);

console.log("Congratulations! Your express kit is ready, have a nice day :)");
