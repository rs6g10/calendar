import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/calendar";
import "./index.css";

module.exports = (dayEvents) => {
    ReactDOM.render(
        <Calendar dayEvents={dayEvents}/>,
        document.getElementById('root')
    );
};

(window || global || {}).layOutDay = module.exports;