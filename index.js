const inquirer = require('inquirer');
const fs = require('fs');


const promptUser = () => {
  return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your title',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
            value: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
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
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'features',
            message: 'If your project has a lot of features, list them here',
        },
    ]);
};

const generateMarkdown = ({title, description, content, installation, usage, badges, features}) =>
`

`;

const init = () => {
    promptUser()
      .then((answers) => fs.writeFileSync('readme.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to readme.md'))
      .catch((err) => console.error(err));
  };

init();
