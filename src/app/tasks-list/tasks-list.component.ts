import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  title: string;
  description:string;
  startDate:Date;
  endDate:Date; 
  status:string;
  reporter:string;
  asignee:string;

  //data bindings with input fields 
  actualTitle: string;
  actualDescription:string;
  actualStartDate:Date;
  actualEndDate:Date;
  actualStatus:string;
  actualReporter:string;
  actualAsignee:string;


  //default task-already added into task list
  taskList = [{
    title:'Check for responsive design',
    description:'Cross browser check for mobile version',
    startDate: new Date('2018-01-20'),
    endDate: new Date('2018-01-22'),
    status:'Complete',
    reporter:'John Doe',
    asignee:'Jane Doe'

}]


actualTask:any;
statusList=['New' ,'Process','Complete'];

  constructor() { 
  }

  isVisible = false;
  addTask(){
    this.isVisible = true;

  }

  errorMessage= false;
  createTask(){
    if(this.actualTitle != '' && this.actualDescription!= '' && this.actualStartDate != null && this.actualEndDate!= null)
    {
      this.actualTask={title:this.actualTitle, description:this.actualDescription,
         startDate:this.actualStartDate, endDate:this.actualEndDate, status:this.actualStatus,
          reporter:this.actualReporter, asignee:this.actualAsignee};
      this.taskList.push(this.actualTask);
      this.errorMessage= false;
    }
    else{
          this.errorMessage = true;
    }
  }

  ngOnInit() {
    this.actualStatus="New";
  }



}
