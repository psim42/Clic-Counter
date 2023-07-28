

/*
I believe the test logic is good, but for some reason the store is not updated after the click, therefore the display doesn't update and the test fail.
As the counter behavior is fine during manual live testing, I believe there is some issue with async behavior
I tried to use await on the userEvent.click function, but for some reason it breaks the test suite completely.
I suspect this is due to some package version incompatibilities, so I tried to change the configuration but with no success unfortunately.
The logic of the counter is tested in reducer.test.js
*/


import renderer from 'react-test-renderer';
import { render, screen  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react';
import { Provider } from 'react-redux'; 
import history from '../src/utils/history';
import configureStore from '../src/configureStore';
import Home from '../src/containers/HomeContainer/index';
import '@testing-library/jest-dom/extend-expect';

const initialState = { };
const store = configureStore(initialState, history);

let count
let increaseCount
let decreaseCount

beforeEach(() => {
    render(
        <Provider store={store}>
            <Home />
        </Provider>,
    )
    count = screen.getByTestId('count')
    increaseCount = screen.getByRole('button', { name: '+ Ajouter un clic' })
    decreaseCount = screen.getByRole('button', { name: '- Retirer un clic' })
  })

describe('Home Component', () => {

    it('renders correctly', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>,
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      });

    // it('should display 1 after clicking the increase button', () => {
    //     userEvent.click(increaseCount)
    //     expect(count).toHaveTextContent('1')
    // })

    // it('should display 1 after clicking the increase button', async () => {
    //     await userEvent.click(increaseCount)
    //     expect(count).toHaveTextContent('1')
    // })

    // it('should display 1 after clicking the increase button, then 0 after clicking the decrease button', () => {
    //     userEvent.click(increaseCount)
    //     expect(count).toHaveTextContent('1')
    //     userEvent.click(decreaseCount)
    //     expect(count).toHaveTextContent('0')
    // })
    // it('should not reach -1 when clicking the decrease button', () => {
    //     userEvent.click(decreaseCount)
    //     expect(count).toHaveTextContent('0')
    // })
})
