import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileState } from './file-state';
import { TaggingState } from './tagging-state';
import { NgxsModule } from '@ngxs/store';
import { TestService } from './test.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxsModule.forRoot([FileState, TaggingState]) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
