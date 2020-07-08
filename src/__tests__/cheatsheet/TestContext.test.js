import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CounterProvider, { CounterContext, Counter } from '../../components/TestContext'



test('checks initial state is equal to 0', () => {
    const { getByTestId } = render(
        <CounterProvider value={CounterContext}>
            <Counter/>
        </CounterProvider>
    );

    expect(getByTestId('counter')).toHaveTextContent('0')
});

test('increments the counter', () => {
    const { getByTestId } = render(
        <CounterProvider value={CounterContext}>
            <Counter/>
        </CounterProvider>
    );

    fireEvent.click(getByTestId('button-up'));

    expect(getByTestId('counter')).toHaveTextContent('1');
});

test('decrements the counter', () => {
    const { getByTestId } = render(
        <CounterProvider value={CounterContext}>
            <Counter/>
        </CounterProvider>
    );

    fireEvent.click(getByTestId('button-down'));

    expect(getByTestId('counter')).toHaveTextContent('-1')
});
