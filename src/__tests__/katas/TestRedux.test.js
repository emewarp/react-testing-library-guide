import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import TestRedux from '../../components/TestRedux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../store/reducer';

test('increments the counter through redux', () => {   
    const storeMock = createStore(reducer, {count: 0})

    render(
        <Provider store={storeMock}>
          <TestRedux />
        </Provider>
      );


    const buttonUp = screen.getByTestId("button-up");
    fireEvent.click(buttonUp);

    expect(screen.getByTestId("counter")).toHaveTextContent(1);

});

// test('ensure that the store has the correct info when increments the counter through redux', async () => {
//     const initialState = {count: 0};
//     const storeMock = createStore(reducer, initialState)

  
//     render(
//         <Provider store={storeMock}>
//           <TestRedux />
//         </Provider>
//       );

//     const buttonUp = screen.getByTestId("button-up");
//     await fireEvent.click(buttonUp);

//     expect(reducer(initialState, "INCREMENT")).toBe({
//         count: 1
//     })

// });

test('decrements the counter through redux', () => {

  const storeMock = createStore(reducer, {count: 0})

    render(
        <Provider store={storeMock}>
          <TestRedux />
        </Provider>
      );


    const buttonUp = screen.getByTestId("button-up");
    fireEvent.click(buttonUp);
    const buttonDown = screen.getByTestId("button-down");
    fireEvent.click(buttonDown);

    expect(screen.getByTestId("counter")).toHaveTextContent(0);
});
