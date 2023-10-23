import { render, screen } from '@testing-library/react';
import { AppCrashPage } from './AppCrashPage';

describe('React component: AppCrashPage', () => {
  test('Should render correctly', () => {
    const renderedText = /App Crash/i;

    render(<AppCrashPage />);

    expect(screen.getByText(renderedText)).toBeInTheDocument();
  });
});
