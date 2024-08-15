import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../Pages/BookingForm';
import { fetchAvailableTimes, submitBooking } from '../utils/apiWrapper';

export function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

export function updateTimes(state, action) {
    return initializeTimes();
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = async (formData) => {
        try {
            const response = await submitBooking(formData);
            if (response) {
                navigate('/confirmed-booking');
            } else {
                console.error('Booking failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleDateChange = async (selectedDate) => {
        try {
            const times = await fetchAvailableTimes(new Date(selectedDate));
            dispatch({ type: 'UPDATE_TIMES', payload: times });
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };

    return (
        <>
            <h1>Book Your Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                onDateChange={handleDateChange}
                onSubmit={submitForm}
            />
        </>
    );
}

export default Main;
