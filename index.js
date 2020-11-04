const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const { generateKeyPair } = require('crypto');
// const generateMarkdown = require('../Develop/utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your Project?",
            name: "title"
        },
        {
            type: "input",
            message: 'Please enter a description of your project.',
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions for this project. Write NONE if no instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you like your applicatio to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "who contributed on this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are Test Instructions?",
            name: "test"
        },
        {
            type: "checkbox",
            message: "Please select a license.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "Whose Credit is this work?",
            name: "credit"
        },
        {
            type: "input",
            message: "What is your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "what is your email address",
            name: "email"
        },
    ]);
}


// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    })
}
function generateMarkdown(response) {
    return `
# ${response.title}

#Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

##Description:
![License](https://img.shields.io/badge/License-${response.license}-bluesvg "License Badge")

${response.description}
## Installation:
${response.installation}
## Usage:
${response.usage}
## Contributing:
${response.contributing}
## Test:
${response.Test}
## Credits:
${response.credit}
## License:
For more information about the License, click on the link below.

- [License](https://opensource.org/licenses/${response.license})

## Questions:
For questions about the Generator you can go to my Github page at the following link:

- [GitHub Profile](https://github.com/${response.username})

For additional questions please reach out to my email at: ${response.email}.
`;
}

module.exports = generateMarkdown;
// // function to initialize program
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
