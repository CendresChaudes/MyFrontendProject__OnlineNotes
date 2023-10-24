import { useBreakpoint as _useBreakpoint } from 'use-breakpoint';
import { Breakpoint } from './const';

export const useBreakpoint = () => {
  const { breakpoint } = _useBreakpoint(Breakpoint);

  return breakpoint;
};
