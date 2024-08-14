import { Link } from 'react-router-dom';
import logo from '../Assets/nav-logo.png';

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
