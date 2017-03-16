import React, {PropTypes} from "react";
import "./layout.css";


const CalendarLayout = (props) => {
    const {
        calendarLayoutData
    } = props;

    return (
        <div>
            <ul className="calendar--timestamps">
                {calendarLayoutData.map((layoutDatum, idx) => {
                    return <li key={`canvas-li-${idx}`}>
                        {layoutDatum.time}&nbsp;&nbsp;
                        <span key={`canvas-li-span-${idx}`} className="period">
                            {layoutDatum.period}
                        </span>
                    </li>
                })
                }
            </ul>
            {calendarLayoutData.slice(0, (calendarLayoutData.length / 2)).map((layoutDatum, idx) => {
                return <div className="divider" key={`divider-${idx}`}/>
            })}
        </div>
    );
};

CalendarLayout.propTypes = {
    calendarLayoutData: PropTypes.array.isRequired
};

module.exports = CalendarLayout;