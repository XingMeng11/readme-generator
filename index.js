const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./util/generateMarkdown");

const init = () => {
  inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.',
        },
        {
            type: 'input',
            name: 'content',
            message: 'Please add contents to make it easy for users to see',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'tusage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'badges',
            
        },
        {
            type: 'input',
            name: 'features',
            message: 'If your project has a lot of features, list them here',
        },
      
    ])
}