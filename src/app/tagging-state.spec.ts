import { NgxsModule, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { TaggingState, UpdateTagging, TaggingStateModel } from './tagging-state';
import { FileState } from './file-state';

describe('TagAssignmentState', () => {

  let store: Store;
  const activeFile = 'activeFile';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TaggingState, FileState])]
    });
    store = TestBed.get(Store);

    store.reset({
      tagging:{
          tagging: undefined
      },
      file:{
          activeFile: activeFile
      }
    });
  });

  it('UpdateTagging testing', async () => {
    await store.dispatch(new UpdateTagging()).toPromise();

    const taggingStateModel: TaggingStateModel = store.selectSnapshot(TaggingState);
    expect(taggingStateModel.tagging).toEqual(activeFile);
  });
});
