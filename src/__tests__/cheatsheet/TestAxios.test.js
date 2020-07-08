import React from 'react'
import {render, waitForElement, fireEvent} from '@testing-library/react'
import axiosMock from 'axios'
import TestAxios from '../../components/TestAxios'

jest.mock('axios');

test('should display a loading text', async() => {
    const { getByTestId } = render(<TestAxios/>);
    expect(getByTestId(/loading/i)).toHaveTextContent('Loading...')

});

test('should load and display the data', async () => {

    const url  = '/greeting';
    const HELLO_GREETING = 'How are you today?'
    const { getByTestId, getByRole } = render(<TestAxios url={url}/>);

    axiosMock.get.mockResolvedValueOnce({
        data: {greeting: HELLO_GREETING}
    });

    fireEvent.click(getByRole('button'));

    const greetingData = await waitForElement(() => getByTestId('show-data'));

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(greetingData).toHaveTextContent(HELLO_GREETING);
});
