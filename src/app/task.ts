export interface ITask {
    name: string;
    completed: boolean;
    important: boolean;
    deadline?: Date;
}

export class Task implements ITask {
    constructor(
        public name: string,
        public completed: boolean = false,
        public important: boolean = false,
        public deadline?: Date,
    ) { }
}
