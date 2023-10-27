import { KeyboardEvent } from 'react';

export const isActivationKey = (evt: KeyboardEvent) => evt.code === 'Enter' || evt.code === 'Space';
