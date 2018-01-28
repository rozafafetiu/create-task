import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  actualTitle: string;
  actualDescription: string;
  actualStartDate: Date;
  actualEndDate: Date;
  actualStatus: string = "New";
  actualPriority: string = "Low";
  actualReporter: string;
  actualAssignee: string;

  data:Date;

  task: Task[] = [
    {
      title: 'Responsive html/css for cross browsers',
      description: 'Check for html on mobile version for all browsers',
      startDate: new Date('2018-01-20'),
      endDate: new Date('2018-02-20'),
      status: 'New',
      priority: 'Blocker',
      reporter: 'John Doe',
      assignee: 'Jane Doe'
    }];



  statusList=['New', 'Process' , 'Complete'];
  //  priorityList=[{label:"Blocker", value:1 }, {label:"Critical", value:2},{label:"High",value:3},{label:"Medium",value:4},{label:"Low",value:5}];
  priorityList = ["Blocker", "Critical", "High", "Medium", "Low"];


  constructor() { }

  ngOnInit() {
  }


  isVisible = false;


  createNewTask() {
    this.isVisible = true;
  }

  errorMsg = false;
  createTask() {

    this.data =new Date();

    if(this.actualTitle != '' && this.actualDescription!= '' && this.actualStartDate != null || this.actualEndDate != null){
       this.task.push({ title: this.actualTitle, description: this.actualDescription, startDate: this.actualStartDate,
                       endDate: this.actualEndDate, status: this.actualStatus, priority: this.actualPriority, reporter: this.actualReporter,
                       assignee: this.actualAssignee });
        this.errorMsg =false ;
    }
    else{
        this.errorMsg =true ;
    }
  }

  // Assign(status)
  // {

  //   this.actualStatus=status;
  //   status = 'test'

  // }

}
