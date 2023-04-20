import { ITask, Task } from "./task";

export const TASK_MOCK: ITask[] = [
    new Task('Hit the gym', false, false, new Date(2023, 3, 1)),
    new Task('Pay bills', true, true),
    new Task('Meet John'),
    new Task('Buy eggs', false, true, new Date(2023, 2, 29)),
    new Task('Read a book', true),
    new Task('Organize office'),
    new Task('Eat dinner'),
    new Task('Buy apples', false, true, new Date(2023, 2, 5)),
    new Task('Meet George', false, true),
    new Task('Feed the cat'),
    new Task('Write a letter', true),
    new Task('Run 1 km', false, false, new Date(2022, 0, 15)),
];
