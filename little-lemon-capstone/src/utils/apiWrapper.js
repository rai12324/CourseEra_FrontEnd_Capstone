import { fetchAPI, submitAPI } from './api'; // Adjust the path if necessary

// Wrapper functions to use the API
export const fetchAvailableTimes = async (date) => {
    try {
        return fetchAPI(date);
    } catch (error) {
        console.error('Error fetching available times:', error);
        throw error;
    }
};

export const submitBooking = async (formData) => {
    try {
        console.log('Submitting form data:', formData);
        const response = submitAPI(formData);
        console.log('API response:', response);
        return response;
    } catch (error) {
        console.error('Error submitting booking:', error);
        throw error;
    }
};
