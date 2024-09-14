# saucedemo-automation-tests
 Certainly! Here's the content for your **README.md** file that you can copy and paste into your project. This README provides clear instructions on the purpose and usage of your automated test suite, tailored for users who are not using the terminal.

---

# SauceDemo Automated Test Suite

This repository contains an automated test suite for the [SauceDemo](https://www.saucedemo.com/) website using Cypress.io. The tests cover scenarios such as valid and invalid login, navigating through product pages, adding items to the cart, and completing the checkout process.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Test Cases](#test-cases)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The purpose of this project is to automate test cases for the SauceDemo website's standard user login using Cypress.io. This suite helps ensure that key functionalities of the website are working as expected.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Cypress Installed**

  - Download and install Cypress from the [Cypress Downloads](https://download.cypress.io/desktop) page.

- **Internet Access**

  - An active internet connection is required to run the tests against the live website.

- **GitHub Desktop Installed (Optional)**

  - If you prefer to clone the repository without using the terminal, you can use [GitHub Desktop](https://desktop.github.com/).

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone or Download the Repository

**Option A: Using GitHub Desktop**

- **Open GitHub Desktop.**
- Click on **"File"** > **"Clone Repository..."**.
- In the **"URL"** tab, paste the repository URL:

  ```
  https://github.com/your-username/saucedemo-automation-tests.git
  ```

- Choose the local path where you want to clone the repository.
- Click **"Clone"**.

**Option B: Download the Repository as a ZIP File**

- Go to the repository page on GitHub.
- Click on the **"Code"** button.
- Select **"Download ZIP"**.
- Extract the ZIP file to a folder on your computer.

### 2. Install Cypress (If Not Already Installed)

- **Download Cypress:**

  - Visit the [Cypress Downloads](https://download.cypress.io/desktop) page.
  - Download the latest version for your operating system.

- **Install Cypress:**

  - Follow the installation instructions provided on the Cypress website.

### 3. Set Up the Project in Cypress

- **Open the Cypress Application:**

  - Run the Cypress application you installed.

- **Add the Project to Cypress:**

  - In the Cypress app, click on **"Add project"** or the **"+"** button.
  - Navigate to the folder where you cloned or extracted the repository.
  - Select the project folder and click **"Open"**.

## Running the Tests

### Using the Cypress Test Runner

1. **Open the Cypress Application:**

   - If not already open, launch the Cypress app.

2. **Select the Project:**

   - If prompted, select the project folder you added earlier.

3. **Run the Tests:**

   - In the Cypress Test Runner, you should see a list of test files under the **"E2E Specs"** section.
   - Click on **`saucedemo.spec.cy.js`** to run the test suite.
   - The tests will execute in an interactive browser window.
   - You can watch the tests as they run and see the results in real-time.

## Test Cases

The test suite includes the following test cases:

1. **TC01 - Valid Login**

   - Verifies that a standard user can log in with valid credentials.

2. **TC02 - Invalid Login**

   - Verifies that the user cannot log in with an incorrect password.

3. **TC03 - Navigate Through Product Pages**

   - Verifies that the user can navigate through different product pages.

4. **TC04 - Add Items to Cart**

   - Verifies that the user can add items to the shopping cart.

5. **TC05 - Checkout Process**

   - Verifies that the user can complete the checkout process successfully.

For detailed descriptions and steps, refer to the [test_cases.md](test_cases.md) file included in the repository.

## Project Structure

The project is organized as follows:

```
saucedemo-automation-tests/
├── cypress/
│   ├── e2e/
│   │   └── saucedemo.spec.cy.js
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── README.md
└── test_cases.md
```

- **`cypress/e2e/saucedemo.spec.cy.js`**: Contains the automated test scripts.
- **`cypress.config.js`**: Cypress configuration file.
- **`test_cases.md`**: Documentation of the test cases.
- **`README.md`**: This file, containing project information and instructions.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**

   - Click on the **"Fork"** button at the top right corner of the repository page.

2. **Clone Your Fork**

   - Use GitHub Desktop or download the ZIP file of your forked repository.

3. **Create a New Branch**

   - Create a new branch for your feature or bug fix.

4. **Make Your Changes**

   - Implement your changes or additions.

5. **Commit and Push**

   - Commit your changes with a descriptive message.
   - Push the changes to your forked repository.

6. **Create a Pull Request**

   - Go to the original repository and click on **"New Pull Request"**.
   - Provide a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note:** If you encounter any issues or have questions, feel free to open an issue on the repository or contact the project maintainer.

---

## Additional Information

### Instructions for Users to Download and Run the Test Cases Without the Terminal

- **Ensure Cypress is Installed:**

  - If you haven't installed Cypress yet, please follow the installation steps in the [Prerequisites](#prerequisites) section.

- **Download or Clone the Repository:**

  - Use GitHub Desktop or download the ZIP file as described in the [Installation](#installation) section.

- **Open the Project in Cypress:**

  - Launch the Cypress application.
  - Click on **"Add project"**.
  - Navigate to the project folder and select it.
  - Cypress will recognize the project and display the available test files.

- **Run the Tests:**

  - In the Cypress Test Runner, click on **`saucedemo.spec.cy.js`** to execute the tests.
  - The tests will run in an interactive browser window.
  - You can observe each test step and see the results.

---

**Enjoy testing!**

---

**Please replace `https://github.com/temple-coding-sanbosay/saucedemo-automation-tests.git` with the actual URL of your repository when providing instructions to others.**

---

