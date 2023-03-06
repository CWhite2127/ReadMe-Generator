
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![license](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === 'GNU-GPL-v3') {
    return `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'BSD-3-Clause') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (license === 'Mozilla') {
    return `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else {
    return ``
  }
}


// // TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache') {
    return `![License: Apache](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GNU-GPL-v3') {
    return `![License: GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'BSD-3-Clause') {
    return `![License: BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'Mozilla') {
    return `![License: Mozilla](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ``
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, contribution, test, license, github, email,}) {
  return `# ${title}
  
  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}

  
  ## Table of Contents
  
  [Go To Description](#Description)  
  [Go To Installation](#Installation)  
  [Go To Usage](#Usage)  
  [Go To License](#License)  
  [Go To Contribution Guidelines](#Contribution-Guidelines)  
  [Go To Testing](#Testing)  
  [Go To Questions](#Questions)  
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${renderLicenseLink(license)}
  
  ## Contribution Guidelines
  
  ${contribution}
  
  ## Testing
  
  ${test}
  
  ## Questions
  
  For further questions please reach out to me at either: 
  
  My Github Page: [${github}](${github})
  
  or 
  
  My Email: ${email}
  `;
}



module.exports = generateMarkdown;






// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
