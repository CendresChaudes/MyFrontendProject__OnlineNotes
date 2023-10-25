import { Breakpoint } from '../hooks/useBreakpoint/const';

export const isMobile = (breakpoint: Nullable<keyof typeof Breakpoint>) => {
  if (!breakpoint) {
    return undefined;
  }

  return breakpoint && (breakpoint === 'XS' || breakpoint === 'SM');
};
