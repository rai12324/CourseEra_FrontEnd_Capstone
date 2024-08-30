import React, { useState } from 'react';

function BookingForm({ availableTimes, onDateChange, onSubmit }) {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'date') {
            onDateChange(new Date(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('lastReservation', JSON.stringify(formData));
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} aria-label="Booking Form">
            <div>
                <label htmlFor="booking-date">Date:</label>
                <input
                    type="date"
                    id="booking-date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="booking-time">Time:</label>
                <select
                    id="booking-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="number-of-guests">Number of Guests:</label>
                <input
                    type="number"
                    id="number-of-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    required
                />
            </div>

            <div>
                <label htmlFor="occasion">Occasion:</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>

            <button type="submit" aria-label="Submit reservation form">Submit Reservation</button>
        </form>
    );
}

export default BookingForm;