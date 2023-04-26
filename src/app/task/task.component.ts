import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask, Task } from '../task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: ITask;
  @Output() notifyDelete: EventEmitter<void>;

  constructor() {
    this.task = new Task('');
    this.notifyDelete = new EventEmitter<void>();
  }

  deleteBtnClicked() {
    this.notifyDelete.emit();
  }

  get completed(): boolean {
    return this.task.completed;
  }

  set completed(value: boolean) {
    this.task.completed = value;
  }

  isDate(obj: any): boolean {
    return obj instanceof Date;
  }

  changeImportancy(): void {
    this.task.important = !this.task.important;
  }
}
