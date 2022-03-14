import React from 'react';
import { render, screen } from '@testing-library/react';
import Restaurant from './restaurants';

test('renders learn react link', () => {
  render(<Restaurant />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
