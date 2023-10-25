import { Breakpoint } from '../hooks/useBreakpoint/const';

export const isTablet = (breakpoint: Nullable<keyof typeof Breakpoint>) => {
  if (!breakpoint) {
    return undefined;
  }

  return breakpoint && breakpoint === 'MD';
};
