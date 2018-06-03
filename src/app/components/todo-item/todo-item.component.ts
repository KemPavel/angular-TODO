import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from '../../models/todos';

@Component({
  selector: 'pk-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
