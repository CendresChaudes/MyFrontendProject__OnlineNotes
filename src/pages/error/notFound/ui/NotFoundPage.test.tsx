import { render, screen } from '@/shared/tests';
import { NotFoundPage } from './NotFoundPage';

jest.mock('@/shared/lib/react/hooks/useBreakpoint', () => ({
  useBreakpoint: () => null
}));

describe('React component: AppCrashPage', () => {
  test('Should render correctly', () => {
    const renderedText = /404/;

    render(<NotFoundPage />);

    expect(screen.getByText(renderedText)).toBeInTheDocument();
  });
});
