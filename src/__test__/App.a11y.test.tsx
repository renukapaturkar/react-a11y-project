import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';
import '@testing-library/jest-dom';



// Add the matcher here
expect.extend(toHaveNoViolations);

test('App should have no basic accessibility violations', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('keyboard navigation works', async () => {
  const user = userEvent.setup();
  render(<App />);
  
  const textarea = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /calculate/i });

  await user.tab();
  expect(textarea).toHaveFocus();

  await user.tab();
  expect(button).toHaveFocus();

  await user.keyboard('[Enter]');
});
