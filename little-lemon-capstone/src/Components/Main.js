import React, { useReducer } from 'react';
import BookingForm from '../Pages/BookingForm';

function initializeTimes() {
    // Initial times can be set here or fetched from an API
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

function updateTimes(state, action) {
    // For now, return the same times regardless of the action
    return initializeTimes();
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <h1>Book Your Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
}

export default Main;
