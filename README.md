# MAIN PAGE APOLLO PROJECT

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/j-bitmaker/main-page-apollo
    $ cd main-page-apollo
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) will used for ensuring Single Page Application.
- [Apollo](https://www.apollographql.com/) is used for simple and agile server requests.

### CSS

- [Bootstrap](https://getbootstrap.com/) is used for CSS-templates.


### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.