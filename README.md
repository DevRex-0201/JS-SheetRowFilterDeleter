# Google Sheets URL Filter Deletion Script

This project hosts a Google Apps Script designed to automate the process of filtering and deleting specific rows from a Google Sheets document. The script specifically targets rows based on the presence of a user-defined substring within URLs located in a specified column. This README provides a comprehensive guide to deploying and utilizing the script effectively.

![Project Image Overview](https://github.com/DevRex-0201/Project-Images/blob/main/JS-SheetRowFilterDeleter.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Introduction

The Google Sheets URL Filter Deletion Script automates the tedious task of manually searching and deleting rows that contain specific keywords or substrings within URLs. Designed for users who manage large datasets within Google Sheets, this script enhances productivity by providing an efficient solution for data cleaning and management.

## Features

- **Automated Filtering:** Automatically identifies and marks rows containing the specified substring within URLs.
- **Batch Deletion:** Deletes all marked rows in a batch operation, significantly reducing manual labor and potential for error.
- **Configurable Search Column:** Allows users to specify the column containing URLs for flexible script application across different datasets.
- **Reverse Deletion Order:** Implements a reverse-order deletion process to prevent row index shifting during the deletion process, ensuring accurate and complete removal of targeted rows.

## Prerequisites

Before using the Google Sheets URL Filter Deletion Script, ensure you have:

- Access to a Google Account.
- Edit permissions for the Google Sheets document you intend to modify.
- Basic familiarity with Google Apps Script.

## Installation

1. **Open Your Google Sheet:** Navigate to the Google Sheets document you wish to edit.
2. **Access Script Editor:** Click on `Extensions` > `Apps Script` from the Google Sheets menu.
3. **Create a New Script:** In the Apps Script editor, create a new script file if one does not already exist.
4. **Copy the Script:** Copy the provided script code into the new script file within the Apps Script editor.
5. **Save:** Give your project a name and save the script.

## Usage

To use the script, follow these steps:

1. **Configure the Script:** Edit the script to specify the column containing URLs. By default, the script assumes URLs are located in Column B.
2. **Run the Script:** From the Apps Script editor, click the play button to execute the script.
3. **Authorize Execution:** The first time you run the script, Google will require authorization to execute the script on your behalf. Follow the prompts to grant the necessary permissions.
4. **Review Changes:** After execution, review your Google Sheets document to confirm the targeted rows have been successfully deleted.

## Configuration

- **Column Specification:** Modify the `var url = row[1];` line to target a different column. For example, to target Column C, change `row[1]` to `row[2]`, since column indexing starts at 0.

## Troubleshooting

If you encounter issues while using the script, consider the following solutions:

- **Script Does Not Run:** Ensure you have granted the necessary permissions and that you are logged into the correct Google Account.
- **Wrong Rows Deleted:** Double-check the column index specified in the script to ensure it targets the correct column containing URLs.

## Contributing

Contributions to the Google Sheets URL Filter Deletion Script are welcome. To contribute, please fork the repository, make your changes, and submit a pull request for review.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Support

For support or further assistance, please open an issue in the project's GitHub repository.
