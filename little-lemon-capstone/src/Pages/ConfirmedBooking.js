import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Booking Confirmed!</h1>
      <p style={styles.message}>
        Thank you for your reservation. We look forward to welcoming you to Little Lemon!
      </p>
      <button style={styles.button} onClick={handleHomeClick}>
        Return to Homepage
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '100px auto',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
  },
  message: {
    fontSize: '1.2em',
    margin: '20px 0',
    color: '#555',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#ff6347',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ConfirmedBooking;
