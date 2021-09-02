import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import TestEvents from '../../components/TestEvents'

test('button up increments counter', () => {   

    //arrange
    render(<TestEvents/>)
    const buttonUp = screen.getByTestId("button-up");
    //act
    fireEvent.click(buttonUp);
    //assert
    expect(screen.getByTestId("counter")).toHaveTextContent(1); //= expect(screen.getByTestId("counter").textContent).toBe("1");
});

test('button down decrements counter', () => {
    //arrange
    render(<TestEvents/>)
    const buttonUp = screen.getByTestId("button-up");
    const buttonDown = screen.getByTestId("button-down");
    //act
    fireEvent.click(buttonUp);
    fireEvent.click(buttonDown);
    //assert
    expect(screen.getByTestId("counter")).toHaveTextContent(0);
});
