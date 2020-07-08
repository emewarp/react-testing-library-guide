import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {render, fireEvent} from '@testing-library/react';
import { reducer } from '../../store/reducer'
import TestRedux from '../../components/TestRedux'



test('increments the counter through redux', () => {
const store  = createStore(reducer, {count: 90});
const { getByTestId } = render(
    <Provider store={store}>
        <TestRedux/>
    </Provider>
);

fireEvent.click(getByTestId('button-up'));

expect(getByTestId('counter')).toHaveTextContent('91');
});

test('decrements the counter through redux', () => {
const store  = createStore(reducer, {count: 100});
const { getByTestId } = render(
    <Provider store={store}>
      <TestRedux/>
    </Provider>
);

fireEvent.click(getByTestId('button-down'));

expect(getByTestId('counter')).toHaveTextContent('99')
});
