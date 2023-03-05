
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = (license) => {
//   let chosenLicense = license;
//   let licenseBadge = '';
//   if (chosenLicense === 'MIT') {
//     licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
//   } else if (chosenLicense === 'Apache') {
//     licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
//   } else if (chosenLicense === 'GNU GPL v3') {
//     licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
//   } else if (chosenLicense === 'BSD 3-Clause') {
//     licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
//   } else if (chosenLicense === 'Mozilla') {
//     licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
//   } else {
//     licenseBadge = `N/A`
//   };
//   console.log(chosenLicense);
// };
// then.renderLicenseBadge(license);
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, contribution, test, license, github, email }) {
  return `# ${title}

## Description

  ${description}
  
  ## Table of Contents
  
  [Go To Description](#-Description)  
  [Go To Installation](#-Installation)  
  [Go To Usage](#-Usage)  
  [Go To License](#-License)  
  [Go To Contribution Guidelines](#-Contribution-Guidelines)  
  [Go To Testing](#-Testing)  
  [Go To Questions](#-Questions)  
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${license}
  
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
