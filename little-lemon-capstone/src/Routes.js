import { Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
import Menu from './Pages/MenuPage';
import Reservations from './Pages/BookingPage';

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
