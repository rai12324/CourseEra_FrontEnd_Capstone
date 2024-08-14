import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Regular');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', payload: newDate }); // Dispatch the date to update available times
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation details:', { date, time, guests, occasion });
        // Additional logic to handle the form submission can be added here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>{timeOption}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option value="Regular">N/A</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit Reservation</button>
            </div>
        </form>
    );
}

export default BookingForm;
