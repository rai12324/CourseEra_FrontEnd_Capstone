import { Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage'; // Import your Home component
import About from './Pages/AboutPage'; // Import your About component
import Menu from './Pages/MenuPage'; // Import your Menu component
import Reservations from './Pages/BookingPage'; // Import your Reservations component

function Routes() {
    return (
        <Routes>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/" exact component={Home} /> {/* Default route */}
        </Routes>
    );
}

export default Routes;
