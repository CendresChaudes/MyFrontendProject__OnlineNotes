import { modeSelector } from '@/entities/note';
import { useAppSelector } from '@/shared/lib';
import { AddNoteModal } from './AddNoteModal';
import { EditNoteModal } from './EditNoteModal';
import { ViewOnlyNoteModal } from './ViewOnlyNoteModal';
import { Mode } from '@/const';

export function Modal() {
  const mode = useAppSelector(modeSelector);

  if (mode === Mode.Add) {
    return <AddNoteModal />;
  }

  if (mode === Mode.ViewOnly) {
    return <ViewOnlyNoteModal />;
  }

  if (mode === Mode.Edit) {
    return <EditNoteModal />;
  }

  return null;
}
