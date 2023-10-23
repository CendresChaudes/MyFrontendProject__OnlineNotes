import { useBreakpoint as _useBreakpoint } from 'use-breakpoint';
import { breakpoints } from '../const';

export const useBreakpoint = () => {
  const { breakpoint } = _useBreakpoint(breakpoints);

  return breakpoint;
};
