import { Component } from '@angular/core';

import { Task } from './models/task';

@Component({
    moduleId: module.id,
    selector: 'ng2-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
    private newTask: Task = new Task();

    private tasks: Task[] = [];

    addNewTask() {
        let task = new Task(this.newTask.details)
        this.tasks.push(task);
        
        this.newTask = new Task();
    }
 }