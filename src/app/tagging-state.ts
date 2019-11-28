import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { FileState, FileStateModel } from './file-state';

export interface TaggingStateModel {
  tagging: string;
}

export class UpdateTagging {
  static type = '[Tagging] UpdateTagging';
}

@State<TaggingStateModel>({
  name: 'tagging',
  defaults: TaggingState.DEFAULTS
})
export class TaggingState {
  static readonly DEFAULTS = {tagging: null};

  constructor(public store: Store) {}

  @Action(UpdateTagging)
  onUpdateTagging(ctx: StateContext<TaggingStateModel>) {
    const fileStateModel: FileStateModel = this.store.selectSnapshot(FileState); // error, state doesn't exist

    ctx.setState({tagging: fileStateModel.activeFile});

    console.log(fileStateModel.activeFile);
  }
}