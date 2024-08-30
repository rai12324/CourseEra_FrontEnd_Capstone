import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import Nav from '../Components/Nav';
import CallToAction from '../Components/CallToAction';
import Specials from '../Components/Specials';
import CustomersSay from '../Components/CustomersSay';
import Chicago from '../Components/Chicago';

function HomePage() {
    const navigate = useNavigate();
    const [hasReservation, setHasReservation] = useState(false);

    // Check if there is a reservation stored in localStorage or any state
    useEffect(() => {
        const reservation = localStorage.getItem('reservation');
        if (reservation) {
            setHasReservation(true);
        }
    }, []);

    const specials = [
        // Array of special items
    ];

    const testimonials = [
        // Array of customer testimonials
    ];

    const viewReservation = () => {
        if (hasReservation) {
            navigate('/view-reservation'); // Navigate to the reservation viewing page
        } else {
            alert('No reservations in place');
        }
    };

    return (
        <main className="homepage">
            <Nav />
            <CallToAction />
            {hasReservation && (
                <button onClick={viewReservation} aria-label="View Reservation">
                    View Your Reservation
                </button>
            )}
            <section aria-labelledby="specials-section">
                <h2 id="specials-section">Specials</h2>
                <Specials specials={specials} />
            </section>
            <section aria-labelledby="testimonials-section">
                <h2 id="testimonials-section">What Our Customers Say</h2>
                <CustomersSay testimonials={testimonials} />
            </section>
            <section aria-labelledby="about-section" id="about-little-lemon">
                <h2 id="about-section">About Little Lemon</h2>
                <Chicago />
            </section>
        </main>
    );
}

export default HomePage;