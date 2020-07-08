import React from 'react'
import TestAsync from "../../components/TestAsync";
import { render, fireEvent, waitForElement } from '@testing-library/react'

test("increments counter after 0.5s", async () => {
    const { getByTestId, getByText } = render(<TestAsync />);

    fireEvent.click(getByTestId('button-up'));

    const counter = await waitForElement(() => getByText("1"));

    expect(counter).toHaveTextContent("1")
});

