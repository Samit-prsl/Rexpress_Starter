#!/usr/bin/env node
const {execSync} = require('child_process');
const { exitCode } = require('process');
const runCommand = ((command)=>{
    try {
        execSync(`${command}`,{stdio:'inherit'})
    } catch (e) {
        console.log(`Failed to execute ${command}`,e);
        return false
    }
    return true
})

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Samit-prsl/Rexpress_Starter.git ${repoName}`;
const installdepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const Checkout = runCommand(gitCheckoutCommand);
if(!Checkout) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)

const installDeps = runCommand(installdepsCommand);
if(!Checkout) process.exit(-1)

console.log(`Congratulations! You are ready,follow the commands `)
console.log(` npm run client-starter`);
console.log(`npm run dev to start`);