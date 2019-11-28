import { State } from '@ngxs/store';

export interface FileStateModel {
  activeFile: string;
}

@State<FileStateModel>({
  name: 'file',
  defaults: FileState.DEFAULTS
})
export class FileState {
  static readonly DEFAULTS = {activeFile: null};
}