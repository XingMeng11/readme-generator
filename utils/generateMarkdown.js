const generateMarkdown =({title, description, licsence, content, installation, usage, features}) =>
`
#${title}

${licsence}


## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
${content}
  
##Installation
${installation}

##Usage
${usage}


##Features
${features}

`;
module.exports = generateMarkdown;