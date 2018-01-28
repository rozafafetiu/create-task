import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TasksComponent} from './task_list/tasks.component';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';







@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 