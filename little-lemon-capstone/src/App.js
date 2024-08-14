import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
import Menu from './Pages/MenuPage';
import Reservations from './Pages/BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
