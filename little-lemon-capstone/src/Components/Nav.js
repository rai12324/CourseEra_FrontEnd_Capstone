import { Link } from 'react-router-dom';
import logo from '../Assets/nav-logo.png';

function Nav() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-little-lemon');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><a href="#" onClick={scrollToAbout}>About</a></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
