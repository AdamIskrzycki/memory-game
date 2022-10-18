import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from './Game';

describe('Game component', () => {
    test('highlights randomly chosen tiles after "Play" button is clicked', () => {
        render(<Game />);

        
        const tileElement = screen.getAllByRole('div');
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        expect(tileElement).toHaveClass("RandomTile");
    })
})