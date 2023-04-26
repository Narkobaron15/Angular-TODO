import { Component } from '@angular/core';

import { TaskService } from '../task.service';
import { ITask } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  private static _orders = ['none', 'descending', 'ascending'];

  private _tasks?: ITask[];
  private _orderedTasks?: ITask[];
  searchKey: string = '';
  currentPriorityOrder: string;
  currentDeadlineOrder: string;

  constructor(public taskService: TaskService) {
    this.currentPriorityOrder = this.currentDeadlineOrder = 'none';
  }
  ngOnInit() {
    this.getTasks();
  }

  get orderedTasks(): ITask[] {
    return this._orderedTasks ?? [];
  }

  private set orderedTasks(value: ITask[]) {
    this._orderedTasks = value;
  }

  private isTask(obj: any): obj is ITask {
    return 'name' in obj;
  }

  getTasks() {
    this.taskService.fetchTasks().subscribe(
      fetchedData => {
        this._tasks = fetchedData;
        this.keyUpdated();
      }
    );
  }

  addTask(task: ITask) {
    this._tasks?.push(task);
  }

  deleteTask(task: ITask): void;
  deleteTask(index: number): void;
  deleteTask(task: any): void {
    const index: number | null =
      typeof task === 'number'
        ? task
        : this.isTask(task)
          ? this._tasks?.indexOf(task) ?? null
          : null;



    if (index !== null && index >= 0 && index < this._tasks!.length) {
      const indexModified: number | null = this.orderedTasks.indexOf(this._tasks![index]);
      this._tasks?.splice(index, 1);
      this.orderedTasks.splice(indexModified, 1);
    }
  }

  // updates displayed tasks when order or search key is changed
  keyUpdated(): void {
    this.orderedTasks = this._tasks!.filter(task =>
      task.name.toLowerCase()
        .includes(this.searchKey.trim().toLowerCase())
    );

    switch (this.currentPriorityOrder) {
      case TasksComponent._orders[1]:
        // descending
        this.orderedTasks.sort(this.prioritySort);
        break;
      case TasksComponent._orders[2]:
        // ascending
        this.orderedTasks.sort((a, b) => this.prioritySort(a, b, true));
        break;
      default:
        break;
    }

    switch (this.currentDeadlineOrder) {
      case TasksComponent._orders[1]:
        // descending
        this.orderedTasks.sort(this.deadlineSort);
        break;
      case TasksComponent._orders[2]:
        // ascending
        this.orderedTasks.sort((a, b) => this.deadlineSort(a, b, true));
        break;
      default:
        break;
    }
  }

  private prioritySort(a: ITask, b: ITask, ascending: boolean = false): number {
    const result = a.important && b.important ? 0 : a.important ? -1 : 1;
    return result * (ascending ? -1 : 1);
  }

  private deadlineSort(a: ITask, b: ITask, ascending: boolean = false): number {
    let result: number;
    if ((a.deadline === undefined && b.deadline === undefined) || a.deadline === b.deadline) result = 0;
    else if ((a.deadline instanceof Date && b.deadline === undefined) || a.deadline! > b.deadline!) result = 1;
    else result = -1;

    return result * (ascending ? -1 : 1);
  }

  // gets next order of sorting for priority and deadline ordering
  // all priorities are contained by TasksComponent._priorities collection
  private getNextOrder(current: string) {
    const _next = TasksComponent._orders.indexOf(current) + 1,
      _index = _next >= TasksComponent._orders.length ? 0 : _next;
    return TasksComponent._orders[_index];
  }

  orderPriority(): void {
    this.currentPriorityOrder = this.getNextOrder(this.currentPriorityOrder);
    this.currentDeadlineOrder = TasksComponent._orders[0];
    this.keyUpdated();
  }

  orderDeadline(): void {
    this.currentDeadlineOrder = this.getNextOrder(this.currentDeadlineOrder);
    this.currentPriorityOrder = TasksComponent._orders[0];
    this.keyUpdated();
  }
}
