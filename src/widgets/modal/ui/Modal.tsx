import { getMode, Mode } from '@/entities/note';
import { useAppSelector } from '@/shared/lib';
import { AddNoteModal } from './AddNoteModal';
import { EditNoteModal } from './EditNoteModal';
import { ViewOnlyNoteModal } from './ViewOnlyNoteModal';

export function Modal() {
  const mode = useAppSelector(getMode);

  if (mode === Mode.Add) {
    return <AddNoteModal />;
  }

  if (mode === Mode.ViewOnly) {
    return <ViewOnlyNoteModal />;
  }

  if (mode === Mode.Edit) {
    return <EditNoteModal />;
  }

  return undefined;
}
