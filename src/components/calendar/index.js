import React, {Component} from "react";
import "./calendar.css";
import CalendarCanvas from "./layout/layout";
import CalendarEvent from "./event/event";
import {groupEvents, arrangeEvents, getIntervalsBetweenTimes} from './calendar-utils';


class Calendar extends Component {
    render() {
        let events = [];
        const calendarLayoutData = getIntervalsBetweenTimes(9, 21, 30); //Get time intervals between 9AM and 9PM
        groupEvents(this.props.dayEvents).map(arrangeEvents).map(groupEvents => groupEvents.forEach(event => events.push(event)));

        return (
            <div className="calendar">
                <div key='calendarEvents' className="calendar--events">
                    <CalendarCanvas calendarLayoutData={calendarLayoutData} />
                    {events.map((event, idx) => {
                        return <CalendarEvent key={`calendarEventComp-0${idx}`} event={event} eventId={`event-0${idx}`}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Calendar;
