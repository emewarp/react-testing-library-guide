import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TestEvents from '../../components/TestEvents'


test('button up increments counter', () => {
  const { queryByTestId } = render(<TestEvents/>);

  fireEvent.click(queryByTestId('button-up'));

  expect(queryByTestId('counter')).toHaveTextContent('1');
});

test('button down decrements counter', () => {
  const { queryByTestId } = render(<TestEvents/>);

  fireEvent.click(queryByTestId('button-down'));

  expect(queryByTestId('counter')).toHaveTextContent('-1');
});
