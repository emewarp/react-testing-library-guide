import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from '../../components/TestElements'


test('counter should equal to 0', () => {
    const { getByTestId } = render(<TestElements/>)
    expect(getByTestId('counter')).toHaveTextContent('0');
});

test('button up should be enabled', () => {
    const { getByTestId } = render(<TestElements/>);
    expect(getByTestId('button-up')).toBeEnabled();
});

test('button down should be disabled', () => {
    const { getByTestId } = render(<TestElements/>)
    expect(getByTestId('button-down')).toHaveAttribute('disabled');
});

