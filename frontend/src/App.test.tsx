import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('renders button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/CLICK ME!/i);
  expect(buttonElement).toBeInTheDocument();
});

test('shows hello when button clicked', () => {
  render(<App />);
  const buttonElement = screen.getByText(/CLICK ME!/i);
  userEvent.click(buttonElement)
  const textElement = screen.getByText(/Hello!/i);
  expect(textElement).toBeInTheDocument();
});