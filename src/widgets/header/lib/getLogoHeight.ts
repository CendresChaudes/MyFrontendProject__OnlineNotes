import { Breakpoint } from '@/shared/lib';

export const getLogoHeight = (breakpoint: Nullable<keyof typeof Breakpoint>): number | undefined | never => {
  switch (breakpoint) {
    case null:
      return undefined;
    case 'XS':
      return 40;
    case 'SM':
      return 45;
    case 'MD':
    case 'LG':
    case 'XL':
    case 'XXL':
      return 65;
    default:
      throw new Error(`This breakpoint does not exist --> ${String(breakpoint)}`);
  }
};
