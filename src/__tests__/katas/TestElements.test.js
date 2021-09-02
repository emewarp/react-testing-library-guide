import React from 'react'
import {render, screen} from '@testing-library/react'
import TestElements from '../../components/TestElements'

//test.only = fit
test('counter should equal to 0', () => {
    render(<TestElements/>)

    expect(screen.getByTestId("counter").textContent).toBe("0")
});

test('button up should be enabled', () => {
    render(<TestElements/>)

    expect(screen.getByTestId("button-up")).toBeEnabled();
});

test('button down should be disabled', () => {
    render(<TestElements/>)

    expect(screen.getByTestId("button-down")).toBeDisabled();
});

