import React, { useEffect, useState } from 'react';

function ViewReservation() {
    const [reservation, setReservation] = useState(null);

    useEffect(() => {
        // Retrieve reservation from local storage
        const storedReservation = localStorage.getItem('lastReservation');

        // Debugging: Check what is retrieved from local storage
        console.log('Stored reservation:', storedReservation);

        if (storedReservation) {
            try {
                const parsedReservation = JSON.parse(storedReservation);
                setReservation(parsedReservation);
            } catch (error) {
                console.error('Error parsing reservation data:', error);
                setReservation(null);
            }
        }
    }, []);

    return (
        <div className="view-reservation">
            <h1>Reservation Details</h1>
            {reservation ? (
                <div>
                    <p><strong>Date:</strong> {reservation.date}</p>
                    <p><strong>Time:</strong> {reservation.time}</p>
                    <p><strong>Number of Guests:</strong> {reservation.guests}</p>
                    <p><strong>Occasion:</strong> {reservation.occasion}</p>
                </div>
            ) : (
                <p>No reservations in place.</p>
            )}
        </div>
    );
}

export default ViewReservation;
