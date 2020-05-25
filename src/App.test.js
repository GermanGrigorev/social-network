import React from 'react';
import { render } from '@testing-library/react';
import Music from "./components/Music/Music";

test('renders learn react link', () => {
  const { getByText } = render(<Music />);
  const linkElement = getByText(/say hi/i);
  expect(linkElement).toBeInTheDocument();
});
