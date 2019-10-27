*Note: This repository's commits are designed to evolve the process step-by-step,
so you can follow along, starting from the beginning or jumping in
at a point of interest.* 

# Rapid Prototyping

Minimizing friction between design, prototyping, and production is crucial for 
quickly iterating on and testing out your ideas. Let's learn some techniques
to facilitate this process!

## React

To illustrate, we will be working with the [React](https://reactjs.org/) library. 
React strikes a nice balance: 

- Its conventions help write modular, reusable code
- The speed of its  UI editing workflow is best in class 
- It is cross platform, spanning the breadth of web, iOS and Android (with a little help from [React Native](https://facebook.github.io/react-native/))

We will utilize a method called [Componenent-based design](https://medium.com/@_alanbsmith/component-based-design-168811e0c4ab),
which stems naturally from React's structure. We break down the UI into its atomic
units, and focus on building those first. As we progress, we are able to assemble
those components into bigger pieces of functionality, and finally into a complete product.
This facilitates not only modularity in the code, but also focused communication between
developers and designers.

## Conventions

Good conventions help structure code and minimize unnecessary cognitive load for
reading + writing code.

- For React / JS, we'll be following: [Airbnb's React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- For git commits, I follow [Isle of Code's Git Style Guide](https://github.com/isleofcode/style-guide/blob/master/commit-style-guides.md)

## Setup

First, install npm (the Node Package Manager, which comes bundled with [Node](https://nodejs.org/en/)). On macOS, I recommend you install using [Homebrew](https://brew.sh/). 

```
brew install node
```

Windows users - you can download directly from [nodejs.org](https://nodejs.org/en/download/). 

Linux - use your distro's package manager, of course!

Next, we are going to utilize the script, [Create React App](https://github.com/facebook/create-react-app) to bootstrap a new react project. This uses npx, which is installed automatically with npm 5.2 and higher.

```
npx create-react-app proto-app
cd proto-app
npm start
```

Try it!