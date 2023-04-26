import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { CreateTaskComponent } from './create-task/create-task.component';
import { PriorityPipe } from './priority-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    CreateTaskComponent,
    PriorityPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
