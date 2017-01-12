# RideShare - Plan your carpools

This project creates a simple mobile app using React Native to create and maintain carpool arrangements

This project was started from [React-Native](https://facebook.github.io/react-native/).

## Prerequisites

The project uses Git and [Node](http://nodejs.org/) for source management and package management, respectively, so you'll need both installed. 
The [Yarn](https://www.npmjs.com/package/yarn) project is a more efficient package manager that still uses NPM, so you'll probably want to install that globally as well.

All Dependencies and tools required for the React Native project must be installed. See the [React Native documentation here](https://facebook.github.io/react-native/docs/getting-started.html). 
SDKs and mobile simulators for iOS (Mac only) and Android must be installed for the projects to launch.

## Install Project and dependencies

Copy the project to your machine using Git. Choose your own ```<project-folder-name>```

```
git clone https://github.com/brianyamasaki/rideshare <project-folder-name>
cd <project-folder-name>
```

All dependencies should be installed using the much faster Yarn (React Native uses Yarn). NPM can be used (yarn and npm are mostly interchangeable).

Install dependencies using Yarn at the command line.

```
yarn
```
Or using NPM
```
npm install
```

## Launch project on simulators

You must be in the ```<project-folder-name>``` directory for the following to work.

To start the project on an iPhone simulator.
```
react-native run-ios
```

To start the project on an Android simulator.
```
react-native run-android
```