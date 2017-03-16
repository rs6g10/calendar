import React, {Component} from "react";
import "./calendar.css";
import CalendarCanvas from "./layout/layout";
import CalendarEvent from "./event/event";
import {groupEvents, arrangeEvents, getIntervalsBetweenTimes} from './calendar-utils';


class Calendar extends Component {
    render() {
        let results = [];
        const calendarLayoutData = getIntervalsBetweenTimes(9, 21, 30);
        groupEvents(this.props.dayEvents).map(arrangeEvents).map(groupEvents => groupEvents.forEach(event => results.push(event)));

        return (
            <div className="calendar">
                <div key='calendarEvents' className="calendar--events">
                    <CalendarCanvas calendarLayoutData={calendarLayoutData} />
                    {results.map((result, idx) => {
                        return <CalendarEvent key={`calendarEventComp-0${idx}`} event={result} eventId={`event-0${idx}`}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Calendar;
