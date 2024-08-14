import React from 'react';

function CustomersSay({ testimonials }) {
    return (
        <>
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.text}</p>
                            <div className="star-rating">
                                {'★'.repeat(testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default CustomersSay;
