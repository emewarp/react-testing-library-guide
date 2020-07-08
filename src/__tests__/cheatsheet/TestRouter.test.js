import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import TestRouter from '../../components/TestRouter'


test('should render the home page', () => {
    const history = createMemoryHistory();
    const { container, getByTestId, getByRole } = render(
        <Router history={history}>
            <TestRouter/>
        </Router>
    );
    const navBar = getByRole('navigation');
    const link = getByTestId('home-link');
    expect(navBar).toContainElement(link);
    expect(container.innerHTML).toMatch('Home page')

});

test('should navigate to the about page', ()=> {

    const history = createMemoryHistory();
    const { container, getByTestId } = render(
        <Router history={history}>
            <TestRouter/>
        </Router>
    );

    const link = getByTestId('about-link');
    fireEvent.click(link);
    expect(container.innerHTML).toMatch('About')

});

test('should navigate to the contact page with the params', ()=> {

    const history = createMemoryHistory();
    const { container, getByTestId } = render(
        <Router history={history}>
            <TestRouter/>
        </Router>
    );

    const link = getByTestId('contact-link');
    fireEvent.click(link);
    expect(container.innerHTML).toMatch('contact')

});
