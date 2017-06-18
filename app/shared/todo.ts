export class Todo {
    constructor(
        public title: string,
        public completed: boolean = false
    ) {}
}

export const todos: Todo[] = [
    {
        title: 'Learn Angular 2',
        completed: true
    },
    {
        title: 'Learn JavaScript',
        completed: false
    },
    {
        title: 'Make an App',
        completed: false
    }
];