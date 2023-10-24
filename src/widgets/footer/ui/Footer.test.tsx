import {render, screen} from '@testing-library/react';
import { Footer } from './Footer';

describe('React component: Footer', () => {
  test('Should render correctly', () => {
    const renderedText = /Designed by/i;

    render(<Footer />);

    expect(screen.getByText(renderedText)).toBeInTheDocument();
  });
});
