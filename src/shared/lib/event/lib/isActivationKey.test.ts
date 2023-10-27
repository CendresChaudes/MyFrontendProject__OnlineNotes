import { KeyboardEvent } from 'react';
import { isActivationKey } from './isActivationKey';

describe('Function: isActivationKey', () => {
  test('Should return "true" when "Enter" key is pressed', () => {
    const mockEvent = {
      code: 'Enter',
    } as KeyboardEvent;

    const result = isActivationKey(mockEvent);

    expect(result).toBeTruthy();
  });

  test('Should return "true" when "Space" key is pressed', () => {
    const mockEvent = {
      code: 'Space',
    } as KeyboardEvent;

    const result = isActivationKey(mockEvent);

    expect(result).toBeTruthy();
  });

  test('Should return "false" when key except for "Enter" or "Space" is pressed', () => {
    const mockEvent = {
      code: 'any',
    } as KeyboardEvent;

    const result = isActivationKey(mockEvent);

    expect(result).toBeFalsy();
  });
});
