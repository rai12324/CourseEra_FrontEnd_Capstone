import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/heroImage.jpeg';

function CallToAction() {
    return (
        <>
            <header className="call-to-action" aria-label="Call to Action">
                <div className="text-container">
                    <h1>Welcome to Little Lemon</h1>
                    <Link to="/view-reservation" className="cta-button" aria-label="View reservation on click">
                        View Reservation
                    </Link>
                </div>
                <div className="image-container">
                    <img src={logo} alt="Little Lemon Restaurant Logo" />
                </div>
            </header>
        </>
    );
}

export default CallToAction;
