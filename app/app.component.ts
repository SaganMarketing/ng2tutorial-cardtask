import { Component } from '@angular/core';

import { Task } from './models/task';

@Component({
    moduleId: module.id,
    selector: 'ng2-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    task1: Task = new Task("The Task Title", false);
 }