import { initializeTimes } from '../Components/Main';
import { updateTimes } from '../Components/Main';
import { getSubmitAPI } from '../utils/apiWrapper';

import { act } from 'react';

test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    expect(initializeTimes()).toEqual(expectedTimes);
});

test('updateTimes returns the same times as provided by initializeTimes', () => {
    const initialState = initializeTimes();
    const action = { type: 'UPDATE_TIMES', payload: '2024-08-14' }; // Example action, can be anything
    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(initialState);
});

console.log('Submit API Function:', getSubmitAPI());