# calendar-layout

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
npm test
npm start
```

After this you will can open [localhost:3000](http://localhost:3000) to open the application.

## Tooling
This application has been created using [create-react-app](https://github.com/facebookincubator/create-react-app). It would have been nice to use SCSS for styles but for the sake of simplicity, it has been written in pure CSS.
