import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";
import Game from './index';

describe('Render a Basic Game', () => {
  test('renders Basic Game with 2 cards', async () => {
    render(
      <Game
        cardCount={2}
      />
    );
    expect(await screen.getAllByTestId('clickMe')[0]).toBeInTheDocument();
  });

  test('renders Basic Game with 3 cards should throw error', async () => {
    render(
      <Game
        cardCount={3}
      />
    );
    expect(screen.getByTestId('count_error')).toBeInTheDocument();
  });

  test('renders Basic Game with 2 cards and click a card to flip', async () => {
    const { debug } =
    render(
      <Game
        cardCount={2}
      />
    );

    const clickMe1 = screen.getAllByTestId('clickMe')[0];
    const clickMe2 = screen.getAllByTestId('clickMe')[0];
    expect(await clickMe1).toBeInTheDocument();
    expect(await clickMe2).toBeInTheDocument();

    //click card 1
    const card1= screen.getByTestId('card_0');
    userEvent.click(card1);
    expect(clickMe1).not.toBeInTheDocument();

    const flipSide1 = screen.getAllByTestId('flipSide')[0];
    expect(await flipSide1).toBeInTheDocument();

    //click card 2 to Match
    const card2= screen.getByTestId('card_1');
    userEvent.click(card2);
    expect(clickMe2).not.toBeInTheDocument();

    const flipSide2 = screen.getAllByTestId('flipSide')[1];
    expect(await flipSide2).toBeInTheDocument();
    debug();

    await waitFor(() => {
      expect(screen.getByTestId('end')).toBeInTheDocument()
    })
  });

});