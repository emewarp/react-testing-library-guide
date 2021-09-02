import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import TestRouter from '../../components/TestRouter';
import { act } from "react-dom/test-utils";

test('should render the home page', () => {
    const history = createMemoryHistory();

    render( <Router history={history}>
                 <TestRouter/>
            </Router>
    );

    const homeLink = screen.getByTestId("home-link");
    fireEvent.click(homeLink);

   // screen.debug()

    expect(screen.getByRole("heading")).toHaveTextContent("Home page");
    //be careful that the role is HEADING, not H1 /!\
});

test('should navigate to the about page', () => {

    const history = createMemoryHistory();

    render( <Router history={history}>
                 <TestRouter/>
            </Router>
    );

    const aboutLink = screen.getByTestId("about-link");
    fireEvent.click(aboutLink);

    expect(screen.getByRole("heading")).toHaveTextContent("About page")

});

test.only('should navigate to the contact page with the params', async() => {

    const history = createMemoryHistory();

    render( <Router history={history}>
                 <TestRouter/>
            </Router>
    );

    const contactLink = screen.getByTestId("contact-link");

    act(() => {
        fireEvent.click(contactLink);
    });
    
    expect(screen.getByTestId("contact-name")).toHaveTextContent("Martina")
});
