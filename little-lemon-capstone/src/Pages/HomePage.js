import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from '../Components/Nav';
import CallToAction from '../Components/CallToAction';
import Specials from '../Components/Specials';
import CustomersSay from '../Components/CustomersSay';
import Chicago from '../Components/Chicago';

import fish from '../Assets/grilled-fish.jpg';
import lemon from '../Assets/lemon-dessert.jpg';
import person from '../Assets/person.jpg';

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
        {
          name: 'Lemon Dessert',
          description: 'A sweet and tangy lemon dessert.',
          image: lemon,
        },
        {
          name: 'Grilled Fish',
          description: 'Perfectly grilled fish with a side of vegetables.',
          image: fish,
        },
      ];

      const testimonials = [
        {
          name: 'John Doe',
          text: 'The food was absolutely fantastic! Will definitely come back.',
          image: person,
          rating: 5,
        },
        {
          name: 'Jane Smith',
          text: 'Great atmosphere and delicious dishes. Highly recommend!',
          image: person,
          rating: 4,
        },
        {
          name: 'Emily Johnson',
          text: 'A wonderful dining experience. The lemon dessert was a highlight.',
          image: person,
          rating: 5,
        },
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
                <h2 id="specials-section"></h2>
                <Specials specials={specials} />
            </section>
            <section aria-labelledby="testimonials-section">
                <h2 id="testimonials-section"></h2>
                <CustomersSay testimonials={testimonials} />
            </section>
            <section aria-labelledby="about-section" id="about-little-lemon">
                <h2 id="about-section"></h2>
                <Chicago />
            </section>
        </main>
    );
}

export default HomePage;