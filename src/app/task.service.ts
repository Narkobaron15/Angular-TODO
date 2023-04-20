import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ITask } from './task';
import { TASK_MOCK } from './mock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  fetchTasks(): Observable<ITask[]> {
    return of(TASK_MOCK);
  }
}
