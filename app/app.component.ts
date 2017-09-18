import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
       <li *ngFor="let currentTask of tasks">{{currentTask.description}}, {{currentTask.priority}}</li>
     </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 'High'),
    new Task('Begin brainstorming possible JavaScript group projects', 'Medium'),
    new Task('Add README file to last few Angular repos on GitHub', 'Low')
   ];
 }

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: string) { }
}
