import { Breakpoint } from './const';

export const isMobile = (breakpoint: Nullable<keyof typeof Breakpoint>) => breakpoint && (breakpoint === 'XS' || breakpoint === 'SM');
