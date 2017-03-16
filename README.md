# calendar

Calendar renders layout day events. It takes an array of start/end times and renders them as "events" on a day
calendar. Start/end times are in minutes from 9:00am, and the calendar shows times ranging
from 9:00am to 9:00pm.  Events are guaranteed not to overlap visually, and events with conflicting
time ranges have equal widths.
> Implemented as a pure static page with minimal libraries and modules attached to a namespaced global, and no assets build/optimization step. The goal is to demonstrate scalable
front end architecture (react) and a custom greedy algorithm - _A greedy algorithm is an algorithmic paradigm that follows the problem solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum_.

![yup](https://raw.githubusercontent.com/rs6g10/layoutday/master/calendarlayout.PNG)

## Usage
To start developing/building/running, fork and clone the project first, then make sure you have Node.js 4.x or higher.
```
npm i
npm test (in case you are asked for usage, please press `a` to run all tests)
npm start
```

After this you will can open [localhost:3000](http://localhost:3000) to open the application.

## Tooling
This application has been created using [create-react-app](https://github.com/facebookincubator/create-react-app). It would have been nice to use SCSS for styles but for the sake of simplicity, it has been written in pure CSS.


## What’s Inside?

The tools used by Create React App are subject to change.
Currently it is a thin layer on top of many amazing community projects, such as:

* [webpack](https://webpack.github.io/) with [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) and [style-loader](https://github.com/webpack/style-loader)
* [Babel](http://babeljs.io/) with ES6 and extensions used by Facebook (JSX, [object spread](https://github.com/sebmarkbage/ecmascript-rest-spread/commits/master), [class properties](https://github.com/jeffmo/es-class-public-fields))
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [ESLint](http://eslint.org/)
* [Jest](http://facebook.github.io/jest)
* and others.

All of them are transitive dependencies of the provided npm package.