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
}
