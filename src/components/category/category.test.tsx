import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from './category';

test('renders learn react link', () => {
  render(<Category />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
