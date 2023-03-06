// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input


const userPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your project title?",
                name: 'title',
            },
            {
                type: 'input',
                message: "Please provide a description of your project",
                name: 'description',
            },
            {
                type: 'input',
                message: "What are the installation instructions for your project?",
                name: 'installation',
            },
            {
                type: 'input',
                message: "What usage information would you like to provide?",
                name: 'usage',
            },
            {
                type: 'input',
                message: "what contribution guidelines would you like to provide?",
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'What test instructions would you like to provide?',
                name: 'test'
            },
            {
                type: 'list',
                message: "Please select a license",
                name: 'license',
                choices: ['MIT', 'Apache', 'GNU-GPL-v3', 'BSD-3-Clause', 'Mozilla', 'None'],
            },
            {
                type: 'input',
                message: "please provide a URL for your github",
                name: 'github',
            },
            {
                type: 'input', 
                message: "Please provide your email address",
                name: 'email',
            },
        ])
    .then((answers) => {
        const readMe = generateMarkdown(answers);


    fs.writeFile('README.md', readMe, (err) =>
        err ? console.log(err) : console.log('Successfully created your README file')
    )
    });
};

// TODO: Create a function to initialize app
function init() {
userPrompt();
}

// Function call to initialize app
init();

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README