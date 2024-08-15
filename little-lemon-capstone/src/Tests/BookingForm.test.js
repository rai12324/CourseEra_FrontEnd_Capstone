import { render, screen } from "@testing-library/react";
import BookingForm from '../Pages/BookingForm';

import { act } from 'react';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
});
