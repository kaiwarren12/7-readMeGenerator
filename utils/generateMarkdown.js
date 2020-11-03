// function to generate markdown for README
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