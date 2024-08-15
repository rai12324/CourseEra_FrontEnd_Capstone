import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [success, setSuccess] = useState(null);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    onDateChange(selectedDate); // Notify parent component of date change
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    console.log('Submitting form data:', formData);

    onSubmit(formData)
      .then((response) => {
        console.log('Submit API response:', response);
        if (response) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      })
      .catch((error) => {
        console.error('Submit error:', error);
        setSuccess(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </label>

      <label>
        Time:
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select time</option>
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>{availableTime}</option>
          ))}
        </select>
      </label>

      <label>
        Number of guests:
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10))}
          min="1"
          required
        />
      </label>

      <label>
        Occasion:
        <input
          type="text"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        />
      </label>

      <button type="submit">Submit reservation</button>

      {success === true && <p>Reservation successful!</p>}
      {success === false && <p>Reservation failed. Please try again.</p>}
    </form>
  );
};

BookingForm.propTypes = {
  availableTimes: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default BookingForm;
