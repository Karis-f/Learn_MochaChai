# Learn-MochaChai
Learn API testing using Mocha chai

The JavaScript tools to run your API tests
The application under test was a Node.js application, so we wanted to find testing tools that worked well in that environment. Thankfully, the Node.js ecosystem has no shortage of excellent tools for all your testing needs. You'll find a library or framework to run everything from basic unit tests to end-to-end tests and everything in between.

With so many choices at our disposal, our focus was to find simple-to-use, battle-tested libraries that have been around for some time. One of the team's desires was to find stable tools that any JavaScript developer could easily pick up. After tinkering around with a few well-known libraries, we found some great libraries that fit the bill.

**SuperTest**

SuperTest provides a high-level abstraction for testing HTTP requests - perfect for APIs. If you have a Node.js application that runs an HTTP server (like an Express application), you can make requests using SuperTest directly without needing a running server. One of the nice things about SuperTest is that while it can run tests without any additional tools, it can integrate nicely with other testing frameworks, as you'll see next.

**Mocha**

One of the better-known JavaScript testing frameworks, Mocha runs on both Node.js and the browser, making it useful for testing asynchronous functionality. One of the cool things about Mocha is it allows you to write your tests in different styles like BDD (it, describe, etc.) and TDD (suite, test, etc.). Mocha fits in nicely with SuperTest, helping you organize your tests in your team's preferred way.

**Chai**

Chai is an assertion library that you can pair with other testing frameworks like Mocha. While not strictly necessary for writing a test suite, it provides a more expressive and readable style for your tests. Like Mocha, Chai allows you to choose BDD-style (expect) or TDD-style (assert) assertions so that you can combine the library with most frameworks without any clashes.

Using these three tools, you can create a fast, stable, and maintainable automated test suite for your APIs with little effort.

**Putting these tools into play**

To demonstrate how SuperTest, Mocha, and Chai work together, we'll use these tools to automate a few tests for reqres.in to improve their API automation testing skills.


First, create a new project inside an empty directory and initialize it by running npm init -y to create a default package.json file. For now, you don't have to edit this file. With the project initialized, you can set up the latest versions of SuperTest, Mocha, and Chai libraries with the following command:

**npm install --save supertest mocha chai**

That's all you need to get started with creating automated tests for your API. Let's start by creating your first API test for the application.

**Running the tests**
 - Run npm install to set up all dependencies.
 - Set up your new project.
 - Execute the test suite with npx mocha {{filename}}.js.


