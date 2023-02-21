import { Button, ButtonTheme } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('render button', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('render with class', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
