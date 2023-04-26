import { Component } from '@angular/core';

import { TaskService } from '../task.service';
import { ITask } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks?: ITask[];

  constructor(public taskService: TaskService) { }
  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.fetchTasks().subscribe(
      fetchedData => this.tasks = fetchedData
    );
  }

  deleteTask(task: ITask): void;
  deleteTask(index: number): void;
  deleteTask(task: any): void {
    let index: number | null = 
    typeof task === 'number' 
    ? task 
    : this.isTask(task) 
      ? this.tasks?.indexOf(task) ?? null
      : null;

    if (index !== null && index >= 0 && index < this.tasks!.length)
        this.tasks?.splice(index, 1);
  }

  private isTask(obj: any): obj is ITask {
    return 'name' in obj;
  }
}
