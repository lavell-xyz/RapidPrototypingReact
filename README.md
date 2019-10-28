# Rapid Prototyping

The faster the prototyping loop, the faster you can test ideas, the better your
results will be. This repo demonstrates techniques for quickly iterating
on a [Trello](https://trello.com)-like task management clone in [React](https://reactjs.org).

## Quickstart

```
git clone https://github.com/lavell-xyz/rapid-prototyping-react.git
cd rapid-prototyping-react/proto-app
npm install 
npm start
```

Point your browser to ```localhost:3000``` and view the live-reloading
app! 


## React

To illustrate, we will be working with the [React](https://reactjs.org/) library. 
React strikes a nice balance: 

- Its conventions help write modular, reusable code
- The speed of its  UI editing workflow is best in class 
- It is cross platform, spanning the breadth of web, iOS and Android (with a
little help from [React Native](https://facebook.github.io/react-native/))

We will utilize a method called [Componenent-based design](https://medium.com/@_alanbsmith/component-based-design-168811e0c4ab),
which stems naturally from React's structure. We break down the UI into its 
atomic units, and focus on building those first. As we progress, we are able to assemble
those components into bigger pieces of functionality, and finally into a complete product.
This facilitates not only modularity in the code, but also focused communication between
developers and designers.

##  Dependencies

First, install npm (the Node Package Manager, which comes bundled with [Node](https://nodejs.org/en/)). On macOS, I recommend you install using [Homebrew](https://brew.sh/). 

```
brew install node
```

Windows users - you can download directly from [nodejs.org](https://nodejs.org/en/download/). 

Linux - use your distro's package manager, of course!

Once node/npm is installed, follow the Quickstart.

## Starting from Scratch

If you want to follow along with the project, and make your own version
from scratch:

First, install the Dependencies. Then, use the [Create React App Script](https://github.com/facebook/create-react-app) to bootstrap a new react project. This utilizes npx, which is installed automatically with npm 5.2 and higher.

```
npx create-react-app proto-app
```

From there, follow the Quickstart and you will be good to go.


## Conventions

Good conventions help structure code and minimize unnecessary cognitive load for
reading + writing code.

- For React / JS, we'll be following: [Airbnb's React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- For git commits, I follow [Isle of Code's Git Style Guide](https://github.com/isleofcode/style-guide/blob/master/commit-style-guides.md)


## Development Environment

A good development environment is clutch for working effectively. 

You likely have your own setup / preferences here. For reference - I am currently
using [VSCode](https://code.visualstudio.com/), an open-source Micro$oft project 
with a ton of usability / speed / extensibility. 

[Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl) is 
a decent dark theme.

## The Prototype

Let's consider a simplified model for now. Our main components are
Card (where you write out tasks), CardList (where cards go), and Board (where CardLists go).

_Note: I would have called them Lists, if that weren't such
an overloaded term already. CardList is a bit of a clunky name,
but it is clear._

### React Comoponents

We are adopting a simple structure to help keep things clean
from the get-go. 

* Components are grouped together in the 'components' folder
* Each component gets its own file

There are other ways of structuring things, but this works for now.
As per the [recommendation in the React Docs]
(https://reactjs.org/docs/faq-structure.html), don't spend more than five minutes
choosing a file structure. As with component naming, and other 
architectural decisions, the goal is to quickly make 
good-as-possible decisions and move on. Just be willing to iterate later!

### More to come!
