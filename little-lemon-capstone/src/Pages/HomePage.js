// src/Pages/HomePage.js
import Nav from '../Components/Nav';
import CallToAction from '../Components/CallToAction';
import Specials from '../Components/Specials';
import CustomersSay from '../Components/CustomersSay';
import Chicago from '../Components/Chicago';

function HomePage() {
    const specials = [
        // Array of special items
    ];

    const testimonials = [
        // Array of customer testimonials
    ];

    return (
        <div className="homepage">
            <Nav />
            <CallToAction />
            <Specials specials={specials} />
            <CustomersSay testimonials={testimonials} />
            <Chicago />
        </div>
    );
}

export default HomePage;
