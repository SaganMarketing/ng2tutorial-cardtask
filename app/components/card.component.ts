import { Component, Input } from '@angular/core';

import { Task } from '../models/task';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent {
    @Input() task: Task;
}