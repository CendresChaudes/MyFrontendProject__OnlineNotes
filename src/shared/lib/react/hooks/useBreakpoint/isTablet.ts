import { Breakpoint } from './const';

export const isTablet = (breakpoint: Nullable<keyof typeof Breakpoint>) => breakpoint && breakpoint === 'MD';
