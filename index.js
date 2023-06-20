// Import packages needed for the nodejs-readme-generator application
import * as fs from 'node:fs';
import * as generateMarkdown from './utils/generateMarkdown.mjs';
import * as inquirer from 'inquirer';

// TODO: #24 Create an array of questions for user input
const questions = [
    // TODO: #1 Prompt for project title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?',
    },

    // TODO: #3 Prompt for project description
    // Prompt message pulled from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },

    // TODO: #5 Prompt for project installation instructions
    // Prompt message pulled from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    {
        type: 'editor',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },

    // TODO: #7 Prompt for project usage information
    // TODO: #33 Support including screenshots stored in the ./assets/images folder in the README file
    // Prompt message pulled from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    {
        type: 'editor',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },

    // TODO: #9 Prompt for project contribution guidelines
    {
        type: 'editor',
        name: 'contributing',
        message: 'Provide guidelines on how other developers can contribute to your project.'
    }

    // TODO: #11 Prompt for project test instructions

    // TODO: #13 Prompt for project license

    // TODO: #16 Prompt for GitHub username

    // TODO: #18 Prompt for email address
    
];

// TODO: #25 Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: #26 Create a function to initialize app
function init() {}

// TODO: #21 Generate professional README.md file
// Function call to initialize app
init();
