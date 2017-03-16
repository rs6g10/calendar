import React, {PropTypes} from "react";
import "./event.css";

const CalendarEvent = (props) => {
    const {
        event,
        eventId
    } = props;

    const width = 600 / event.positions;
    const position = event.position || 0;
    const id = eventId;
    const eventStyle = {
        height: `${ event.end - event.start}px`,
        width: `${width}px`,
        left: `${width * position}px`,
        top: `${event.start}px`
    };

    return (
        <div key={id} className="calendar--event" style={eventStyle}>
            <dl key={`dl-${id}`}>
                <dt key={`dt-${id}`}>Sample item</dt>
                <dd key={`dd-${id}`}>Sample location</dd>
            </dl>
        </div>
    );
};

CalendarEvent.propTypes = {
    event: PropTypes.object.isRequired,
    eventId: PropTypes.string.isRequired
};

module.exports = CalendarEvent;