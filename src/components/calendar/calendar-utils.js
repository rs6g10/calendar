export function arrangeEvents(events) {
    const rows = [{end: 0}];
    events.forEach(event => {
        for (var i = 0; i < rows.length; i++) {
            const row = rows[i];

            if (event.start >= row.end) {
                event.position = i;
                row.end = Math.max(row.end, event.end);
                return;
            }
        }

        event.position = i;
        rows.push({end: event.end});
    });

    events.forEach(event => {
        event.positions = rows.length;
    });

    return events;
}

export function groupEvents(events) {
    const groupedEvents = [];
    //sorty McSort Sortson END - ha!
    events.sort((x, y) => x.start - y.start || y.end - x.end);

    let eventGroup;
    let endGroup = -1;

    //start-end interaction in a sorted list
    events.forEach(event => {
        const intersection = event.start < endGroup;

        if (!intersection) {
            if (eventGroup) {
                groupedEvents.push(eventGroup);
            }
            endGroup = -1;
            eventGroup = [];
        }

        eventGroup.push(event);
        endGroup = Math.max(endGroup, event.end);
    });

    if (eventGroup) {
        groupedEvents.push(eventGroup);
    }
    return groupedEvents;
}

export function getIntervalsBetweenTimes(startHour, endHour, intervalInMinutes) {
    const startTime = new Date(2001, 1, 1, startHour, 0, 0);
    const endTime = new Date(2001, 1, 1, endHour, 0, 0);
    const arr = [];
    while (startTime < endTime) {
        arr.push(_formatAMPM(startTime));
        startTime.setMinutes(startTime.getMinutes() + intervalInMinutes);
    }
    arr.push(_formatAMPM(endTime));
    return arr;
}

function _formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const timePeriod = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return {time: `${hours}:${minutes}`, period: timePeriod};
}
