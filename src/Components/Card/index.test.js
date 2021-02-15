import { render, screen } from '@testing-library/react';
import Card from './index';

test('renders Basic Card with fore side', () => {
  render(
    <Card
      id={1}
      value={15}
      side={'fore'}
      isComparing={false}
      isMatched={false}
    />
  );
  const linkElement = screen.getByText(/Click to Flip/i);
  expect(linkElement).toBeInTheDocument();
});
