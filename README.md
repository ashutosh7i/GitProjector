# GitProjector

[![wakatime](https://wakatime.com/badge/user/62850a07-caf8-470f-86a7-660093b4f5b4/project/018e8025-cc3c-445e-9679-85dcd356212f.svg)](https://wakatime.com/badge/user/62850a07-caf8-470f-86a7-660093b4f5b4/project/018e8025-cc3c-445e-9679-85dcd356212f)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Description

GitProjector is a lightweight React component designed to simplify the process of showcasing projects directly from GitHub repositories onto personal portfolio websites. By leveraging GitHub APIs, GitProjector allows users to effortlessly browse through their repositories and extract specific project information from a standardized markdown file named proj.md. This project aims to empower individuals to curate dynamic portfolios by seamlessly integrating their GitHub projects with their personal websites.

## Motivation
The motivation behind GitProjector stems from the need for a straightforward solution to dynamically showcase GitHub projects on personal portfolio websites. Traditional methods often involve manual updates and maintenance, whereas GitProjector automates this process, enabling users to effortlessly highlight their latest projects without hassle. By providing a simple yet effective tool, GitProjector empowers individuals to focus more on their projects' content and less on the technicalities of portfolio management.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Requirements
1. Create a new file ```proj.md``` in the root directory of repository(s) you want to be parsed.
2. Copy the template proj.md given and customize fields according to your project.
3. Generate a new ```Personal access tokens (classic)``` from [github.com/settings](https://github.com/settings/tokens).
4. Give a name of your choice and give all read permissions.
5. Create and copy token as a prop in the component. (use .env)

## Installation

To install GitProjector, follow these steps:

1. Clone the repository to your local machine:
   ```
   $ git clone https://github.com/your-username/GitProjector.git
   ```
2. Navigate to the project directory:
    ```
    $ cd GitProjector
    ```
3. Install the required dependencies using npm:
    ```
    $ npm install
    ```
    
## Usage

To use GitProjector in your React application, follow these steps:

1. Import the GitProjector component into your React application:

```
import GitProjector from 'path/to/GitProjector';
```
2. Use the GitProjector component in your JSX code, passing the username and token props:

```
<GitProjector username="your-github-username" token="your-github-token" />
```

## Demo
A deployed demo of the project can be found [here](https://ashutosh7i.github.io/GitProjector/)

## Features
- Seamless Integration: GitProjector seamlessly integrates with GitHub APIs to fetch and parse project data from user repositories.
- Automated Parsing: Using regular expressions, GitProjector extracts project details from the standardized proj.md file, including project name, description, features, tech stack, images, links, and badges.
- Dynamic Showcase: Users can dynamically showcase their GitHub projects on personal portfolio websites by embedding GitProjector components.
- Customizable Display: GitProjector provides flexibility in displaying project information, allowing user to customize the presentation of their projects according to their preferences.

## Notes
- Ensure that you have the necessary permissions and access tokens to fetch data from the GitHub API. Without proper authentication, GitProjector may not function as expected.
- GitProjector relies on regular expressions to parse project data from the standardized proj.md file. Ensure that your proj.md files follow the prescribed format for accurate data extraction.

## Contributing
Explain how others can contribute to your project. This can include guidelines for bug reporting, feature requests, or code contributions.

- Fork the repository.
- Create a new branch (git checkout -b feature).
- Make changes and commit them (git commit -am 'Add new feature').
- Push to the branch (git push origin feature).
- Create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
