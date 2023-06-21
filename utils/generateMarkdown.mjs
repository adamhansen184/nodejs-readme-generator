// Function that returns the link to the license on https://choosealicense.com
// Function returns an empty string if there is no license
// Function requires a single string parameter named license
// String parameter license should match one of the license keywords as defined on https://choosealicense.com and at https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type 
// String parameter license should match none if there is no license
function renderLicenseLink(license) {
    if (license === 'none') {
        return '';
    } else {
        return `https://choosealicense.com/licenses/${license}/`;
    }
}

// Function returns GitHub Flavored Markdown with a license badge image linked to the corresponding license on https://choosealicense.com
// Function returns an empty string if there is no license
// Function requires a single string parameter named license
// String parameter license should match one of the license keywords as defined on https://choosealicense.com and at https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type 
// String parameter license should match none if there is no license
function renderLicenseBadge(license) {
    // Generate a link to the license on https://choosealicense.com using the renderLicenseLink function
    const licenseLink = renderLicenseLink(license);

    // Return GitHub Flavored Markdown with a license badge image linked to the corresponding license on https://choosealicense.com
    switch (license) {
        case 'apache-2.0':
            return `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${licenseLink})`;
        case 'gpl-2.0':
            return `[![License: GNU General Public License v2.0](https://img.shields.io/badge/License-GNU%20GPL%20v2.0-blue.svg)](${licenseLink})`;
        case 'gpl-3.0':
            return `[![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20GPL%20v3.0-blue.svg)](${licenseLink})`;
        case 'isc':
            return `[![License: ISC License](https://img.shields.io/badge/License-ISC-blue.svg)](${licenseLink})`;
        case 'mit':
            return `[![License: MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](${licenseLink})`;
        case 'none':
        default:
            return '';
    }
}

// TODO: #29 Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate GitHub Flavored Markdown for README file
function generateREADME(data) {
    // Generate a license badge using the renderLicenseBadge function
    const licenseBadge = renderLicenseBadge(data.license);
    // Generate the text of the license section using the renderLicenseSection function
    const licenseSection = renderLicenseSection(data.license);

    return `# ${data.title}

<!-- ## Badges(#badges) -->
${licenseBadge}

<!-- ## Description(#description) -->
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

## Installation(#installation)
${data.installation}

## Usage(#usage)
${data.usage}

## Contributing(#contributing)
${data.contribution}

## Testing(#testing)
${data.tests}

## Credits(#credits)
${data.title} was initially developed by:
- ${data.creator} [@${data.username}](https://github.com/${data.username})
<!-- TODO: #39 Add support for multiple creators -->
<!-- TODO: #40 Add support for (multiple) collaborators  -->

All inquiries about ${data.title} should be emailed to [${data.email}](mailto:${data.email}).

## License(#license)
${licenseSection}

`;
}

export default generateREADME;
