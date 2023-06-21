// TODO: #27 Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: #28 Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: #29 Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: #30 Create a function to generate markdown for README
function generateMarkdown(data) {
    // Generate a license badge using the renderLicenseBadge function
    const licenseBadge = renderLicenseBadge(data.license);
    // Generate a link to the license using the renderLicenseLink function
    const licenseLink = renderLicenseLink(data.license);
    // Generate the text of the license section using the renderLicenseSection function
    const licenseSection = renderLicenseSection(data.license);

    // TODO: #17 Display prompted GitHub username under Questions section
    // TODO: #19 Display prompted email address under Questions section
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

## License(#license)
${licenseSection}

`;
}

export default generateMarkdown;
