import { Component } from  '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html'
})

export class TodoFormComponent {
    newTodoTitle: string = '';

    addItem() {

    }
}