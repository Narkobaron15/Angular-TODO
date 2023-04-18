export interface ITask {
    name: string;
    completed: boolean;
    important: boolean;
    deadline?: Date;
}

export interface ITask {
    name: string;
    completed: boolean;
    important: boolean;
    deadline?: Date;
}

export class Task implements ITask {
    constructor(
        private _name: string,
        private _completed: boolean = false,
        private _important: boolean = false,
        private _deadline?: Date,
    ) { }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get completed(): boolean {
        return this._completed;
    }

    set completed(value: boolean) {
        this._completed = value;
    }

    get important(): boolean {
        return this._important;
    }

    set important(value: boolean) {
        this._important = value;
    }

    get deadline(): Date | undefined {
        return this._deadline;
    }

    set deadline(value: Date | undefined) {
        this._deadline = value;
    }
}
