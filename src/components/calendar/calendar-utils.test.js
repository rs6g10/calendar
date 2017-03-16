import React from "react";
import {groupEvents, arrangeEvents, getIntervalsBetweenTimes} from "./calendar-utils";
var assert = require('chai').assert;

describe('groupEvents', () => {
    it('should return empty events when passed with empty events', () => {
        const actual = groupEvents([]);
        const expected = [];
        assert.deepEqual(expected, actual);
    })

    it('should create two separate groups whilst intersecting in correct sorted order', () => {
        const actual = groupEvents([{start: 50, end: 170}, {start: 30, end: 150}]);
        const expected = [[{start: 30, end: 150}, {start: 50, end: 170}]];
        assert.deepEqual(expected, actual);
    });


    it('should group intersecting events', () => {
        const actual = groupEvents([
            {start: 30, end: 150},
            {start: 60, end: 160},
            {start: 90, end: 200},
            {start: 540, end: 600},
            {start: 560, end: 620},
            {start: 610, end: 670}
        ]);

        const expected = [
            [
                {start: 30, end: 150},
                {start: 60, end: 160},
                {start: 90, end: 200},
            ],
            [
                {start: 540, end: 600},
                {start: 560, end: 620},
                {start: 610, end: 670}
            ]
        ];

        assert.deepEqual(expected, actual);
    });
});

describe('arrangeEvents', () => {
    it('should return empty events when passed with empty events', () => {
        assert.deepEqual([], arrangeEvents([]));
    });

    it('should return properly arranged event when passed with only one set of event', () => {
        const actual = arrangeEvents([
            {start: 0, end: 1}
        ]);
        const expected = [{start: 0, end: 1, position: 0, positions: 1}];
        assert.deepEqual(expected, actual);
    });

    it('should return properly arranged 2 sets of events when passed on with multiple cohesive events', () => {
        const actual = arrangeEvents([
            {start: 30, end: 200},
            {start: 540, end: 600},
            {start: 560, end: 620},
            {start: 700, end: 710}
        ]);

        const expected = [
            {start: 30, end: 200, position: 0, positions: 2},
            {start: 540, end: 600, position: 0, positions: 2},
            {start: 560, end: 620, position: 1, positions: 2},
            {start: 700, end: 710, position: 0, positions: 2}
        ];


        assert.deepEqual(expected, actual);
    });
});

describe('getIntervalsBetweenTimes', () => {
    it('should return properly formatted intervals between two times', () => {
        const actual = getIntervalsBetweenTimes(12, 14, 30);
        const expected = [{time: '12:00', period: 'PM'},
            {time: '12:30', period: 'PM'},
            {time: '1:00', period: 'PM'},
            {time: '1:30', period: 'PM'},
            {time: '2:00', period: 'PM'}];
        assert.deepEqual(expected, actual);
    });

    it('should return properly formatted intervals between two times when times overflow to next day', () => {
        const actual = getIntervalsBetweenTimes(23, 26, 30);
        const expected = [{time: '11:00', period: 'PM'},
                {time: '11:30', period: 'PM'},
                {time: '12:00', period: 'AM'},
                {time: '12:30', period: 'AM'},
                {time: '1:00', period: 'AM'},
                {time: '1:30', period: 'AM'},
                {time: '2:00', period: 'AM'}]
            ;
        assert.deepEqual(expected, actual);
    });
});

