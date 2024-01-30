# Set up your project

0. Clone this repository

1. Install Node.js (v8.1.4 or above)
	* Mac/Linux: Install nvm from https://github.com/creationix/nvm, then run `nvm use` from your terminal
	* Windows: Download and install Node.js from https://nodejs.org/en/download/

2. From your terminal, run `npm init -y`

# Install Jest

**Jest** is a JavaScript test framework that we can use for testing both front-end and back-end code.

One of Jest's philosophies is to provide an integrated "zero-configuration" experience for writing tests. 
Conveniently, this means that it includes everything you need for TDD in a single package (test runner, assertions, 
matchers, spies, stubs and mocks)

The jest documentation can be found here: https://jestjs.io/docs/en/getting-started

1. Install jest with `npm install --save-dev jest`

2. Modify your `package.json` file, replacing:

    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
    
    with
    
    ```
    "scripts": {
        "test": "jest --verbose",
        "tdd": "jest --verbose --watch --onlyChanged"
    },
    ```
    
3. Run `npm test`

    This command runs all tests and exits. Typically, we will call this from within the build pipeline.

4. Run `npm run tdd`

    This command continuously watches files for changes and rerun tests related to changed files. 
    This is the command we will be using most often during TDD. 


# Configure pre-commit hooks [Optional]

To prevent bad commits, we can configure pre-commit hooks to ensure that unit tests are run before every commit.

1. Install husky with `npm install --save-dev husky`

2. Modify your `package.json` file, replacing:

    ```
    "scripts": {
        "test": "jest --verbose",
        "tdd": "jest --verbose --watch --onlyChanged"
    },
    
    ```
    
    with
    
    ```
    "scripts": {
        "test": "jest --verbose",
        "tdd": "jest --verbose --watch --onlyChanged",
        "precommit": "npm test"
    },
    
    ```

# Configure your IDE [Optional]

## IntelliJ

In Preferences:

1. Under Language & Frameworks > JavaScript, set your JavaScript language version to "ECMAScript 6".

2. Under Language & Frameworks > JavaScript > Libraries, download and enable both `jest` and `node`.

# Let's get started!

Now that you're all set, let's get started with the exercises.

