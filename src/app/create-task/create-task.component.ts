import { Component, EventEmitter, Output } from '@angular/core';
import { ITask, Task } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output() onCreation;
  task!: ITask;
  deadline!: string;

  constructor() {
    this.onCreation = new EventEmitter<ITask>();
    this.RefreshTask();
  }

  AddButtonClick() {
    const date = new Date(this.deadline);

    if (!isNaN(date.getTime()))
      this.task.deadline = date;

    this.onCreation.emit(this.task);
    this.RefreshTask();
  }

  RefreshTask() {
    this.task = new Task();
    this.deadline = '';
  }
}
