import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskComponent} from './tasks/task/task.component';
import {ListsComponent} from './lists/lists.component';
import {ListComponent} from './lists/list/list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    ListsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
