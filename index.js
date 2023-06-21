// Import packages needed for the nodejs-readme-generator application
import * as fs from 'node:fs';
import * as generateMarkdown from './utils/generateMarkdown.mjs';
import * as inquirer from 'inquirer';

// Create an array of license choices
// License choices and values pulled from https://choosealicense.com/ and https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type
const licenses = [
    {
        name: 'Apache License 2.0',
        value: 'apache-2.0',
        short: 'Apache 2.0',
    },
    {
        name: 'GNU General Public License v2.0',
        value: 'gpl-2.0',
        short: 'GNU GPL v2.0',
    },
    {
        name: 'GNU General Public License v3.0',
        value: 'gpl-3.0',
        short: 'GNU GPL v3.0',
    },
    {
        name: 'ISC License',
        value: 'isc',
        short: 'ISC',
    },
    {
        name: 'MIT License',
        value: 'mit',
        short: 'MIT',
    },
    {
        name: 'None',
        value: 'none',
        short: 'None',
    }
];

// Create an array of questions for user input
const questions = [
    // Prompt for project title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?',
    },

    // Prompt for project description
    // Prompt message pulled from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },

    // Prompt for project installation instructions
    // Prompt message pulled from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    {
        type: 'editor',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },

    // Prompt for project usage information
    // TODO: #33 Support including screenshots stored in the ./assets/images folder in the README file
    // Prompt message pulled from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    {
        type: 'editor',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },

    // Prompt for project contribution guidelines
    {
        type: 'editor',
        name: 'contribution',
        message: 'Provide guidelines on how other developers can contribute to your project.',
    },

    // Prompt for project test instructions
    {
        type: 'editor',
        name: 'tests',
        message: 'Provide examples of how to run tests for your application.',
    },

    // Prompt for project license
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: licenses,
    },

    // Prompt for creator's name
    {
        type: 'input',
        name: 'creator',
        message: 'What is your name?',
    },

    // Prompt for creator's GitHub username
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },

    // Prompt for creator's email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: #25 Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: #26 Create a function to initialize app
function init() {}

// TODO: #21 Generate professional README.md file
// Function call to initialize app
init();
