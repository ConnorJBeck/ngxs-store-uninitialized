import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateTagging } from './tagging-state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';

  constructor(public store: Store) {}

  onClick() {
    this.store.reset({'file': { 'activeFile': 'file'}})

    this.store.dispatch(new UpdateTagging());
  }
}
