import { getMode, Mode } from '@/entities/note';
import { useAppSelector } from '@/shared/lib';
import { ModalAddNote } from './ModalAddNote';

export function Modal() {
  const mode = useAppSelector(getMode);

  if (mode === Mode.Add) {
    return <ModalAddNote/>;
  }

  return undefined;
}
