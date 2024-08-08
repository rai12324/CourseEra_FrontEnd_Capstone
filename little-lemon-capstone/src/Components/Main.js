import logo from '../Assets/heroImage.jpeg';

function Main() {
    return (
        <header className="main">
            <div className="text-container">
                <h1>Welcome to Little Lemon</h1>
                <a href="#reservations" className="cta-button">Make a Reservation</a>
            </div>
            <div className="image-container">
                <img src={logo} alt="Little Lemon" />
            </div>
        </header>
    );
}

export default Main;