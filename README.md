# Todo API example

[![Travis-ci Build Status](https://travis-ci.org/matheuslbarros/hapi-todo.svg?branch=master)](https://travis-ci.org/matheuslbarros/hapi-todo)

This is an example of a todo API implemented on Hapi

## Demo

See the live example running on heroku

https://matheuslbarros-hapi-todo.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- git - https://git-scm.com/downloads
- node, npm - https://nodejs.org/en/download/

### Installing

A step by step series of examples that tell you how to get a development env running

#### Download

```
git clone https://github.com/matheuslbarros/hapi-todo
```

#### Install

```
npm install
```

#### Running

```
npm start
```

## Running the tests

### Functional tests

The command below will run all tests and check the code coverage

```
npm test
```

### Coding style

The command below will check for coding styling errors

```
npm run lint
```

### Newman

The command below will execute requests on the api

```
npm run newman
```

## Playground

Import the [todo.postman_collection.json](/docs/todo.postman_collection.json) file on postman to execute some requests, and see how it works.

## Documentation

After start the application, you will be able to see the documentation on   [/documentation](http://127.0.0.1:9000/documentation), here you can also execute requests to the endpoints.

## Built With

* [npm](https://www.npmjs.com/) - Package manager for JavaScript
* [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Hapi](https://hapijs.com/) - Rich framework for building applications and services
* [Lab](https://github.com/hapijs/lab) - Simple test utility for Node.js
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript
* [Swagger](https://swagger.io/) - Most popular suite of tools across the API lifecycle
* [Postman](https://www.getpostman.com/) - Complete API development environment, and flexibly integrates with the software development cycle.

## Authors

* [Matheus Barros](https://github.com/matheuslbarros)
