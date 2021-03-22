
// TODO: Create an array of questions for user input
// const questions = [];
const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Does your application require installation?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will your application be used?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List out here the resources you used.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to display?',
      choices: ['MIT', 'Mozilla', 'Apache', 'The Unlicensed'],
    },
    {
      type: 'input',
      name: 'links',
      message: 'Enter the GitHub/GitLab links as well as the link to launch the application.',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter the author(s) of the application.',
    },
  ]);

function renderLicenseLink(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function to write README file
const generateREADME = (answers) => {
return`
# Project Name
${answers.project}

*  [Installation](#installation)
*  [Usage](#usage)
*  [Credits](#credits)
*  [License](#license)

## Installation
- ${answers.installation}

## Usage
- ${answers.usage}

## Screenshots

## Credits
- ${answers.credits}

## License
${renderLicenseLink(answers.license)}

## Links
- ${answers.links}

## Author
- ${answers.author}`;
};

// Function call to initialize app
const init = () => {
    promptUser().then((answers) => {
        try {
            const README = generateREADME(answers);
            fs.writeFileSync('README.md', README);
            console.log('Successfully wrote to README.md');
        }catch (error) {
    console.log(error);
    }
  });
};

init();
