import { render, screen } from '@testing-library/react';
import SubmitBar from './submitBar'

test('render submitBar', () => {
  render(<SubmitBar />);
  const submitElement = screen.getByLabelText("To Do:");
  expect(submitElement).toBeInTheDocument();
});
