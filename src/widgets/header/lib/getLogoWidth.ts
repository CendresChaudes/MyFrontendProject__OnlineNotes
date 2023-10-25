import { Breakpoint } from '@/shared/lib';

export const getLogoWidth = (breakpoint: Nullable<keyof typeof Breakpoint>): number | undefined | never => {
  switch (breakpoint) {
    case null:
      return undefined;
    case 'XS':
      return 40;
    case 'SM':
      return 175;
    case 'MD':
    case 'LG':
    case 'XL':
    case 'XXL':
      return 265;
    default:
      throw new Error(`This breakpoint does not exist --> ${String(breakpoint)}`);
  }
};
