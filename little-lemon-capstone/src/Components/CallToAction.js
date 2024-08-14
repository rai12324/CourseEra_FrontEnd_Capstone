import React from 'react';
import logo from '../Assets/heroImage.jpeg';

function CallToAction() {
    return (
        <>
            <header className="call-to-action">
                <div className="text-container">
                    <h1>Welcome to Little Lemon</h1>
                    <a href="#reservations" className="cta-button">Make a Reservation</a>
                </div>
                <div className="image-container">
                    <img src={logo} alt="Little Lemon" />
                </div>
            </header>
        </>
    );
}

export default CallToAction;
