import { isMobile } from './isMobile';

describe('Function: isMobile', () => {
  test('Should return "true" when breakpoint exists and equal to "XS"', () => {
    const breakpoint = 'XS';

    const result = isMobile(breakpoint);

    expect(result).toBeTruthy();
  });

  test('Should return "true" when breakpoint exists and equal to "SM"', () => {
    const breakpoint = 'SM';

    const result = isMobile(breakpoint);

    expect(result).toBeTruthy();
  });

  test('Should return "false" when breakpoint exists and is not equal to "XS" or "SM"', () => {
    const breakpoint = 'MD';

    const result = isMobile(breakpoint);

    expect(result).toBeFalsy();
  });

  test('Should return "false" when breakpoint does not exist', () => {
    const breakpoint = null;

    const result = isMobile(breakpoint);

    expect(result).toBeFalsy();
  });
});


