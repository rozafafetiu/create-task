import { Component, OnInit } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  
})
export class TaskComponent implements OnInit {

  // taskOne:Model;

  constructor() { }

  ngOnInit() {

  


  }

  //Create task function
  showCreatedTasks = false;
  createTask(){
    this.showCreatedTasks = true;

  }
  

}
