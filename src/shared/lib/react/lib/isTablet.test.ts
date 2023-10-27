import { isTablet } from './isTablet';

describe('Function: isTablet', () => {
  test('Should return "true" when breakpoint exists and equal to "MD"', () => {
    const breakpoint = 'MD';

    const result = isTablet(breakpoint);

    expect(result).toBeTruthy();
  });

  test('Should return "false" when breakpoint exists and is not equal to "MD"', () => {
    const breakpoint = 'XS';

    const result = isTablet(breakpoint);

    expect(result).toBeFalsy();
  });

  test('Should return "false" when breakpoint does not exist', () => {
    const breakpoint = null;

    const result = isTablet(breakpoint);

    expect(result).toBeFalsy();
  });
});

