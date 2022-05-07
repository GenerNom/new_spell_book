import { render, screen } from '@testing-library/react';
import TopLevel from './TopLevel';

test('renders learn react link', () => {
  render(<TopLevel />);
  const linkElement = screen.getByText("taskName");
  expect(linkElement).toBeInTheDocument();
});
