import logo from '../Assets/nav-logo.png';

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
            </ul>
        </nav>
    );
}

export default Nav;