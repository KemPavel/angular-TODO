import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'pk-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  private _value4: number;
  
  @Input() todoName: string;
  @Input() value1: string;
  @Input() value2: number;
  @Input() value3: number;
  @Input() set value4(value: number) {
    this._value4 = value || 256;
  };

  @Output() onChanged = new EventEmitter<string>();
  @Output() todoNameChange = new EventEmitter<string>();

  private onTodoNameChange(model: string): void {
    this.todoName = model;
    this.todoNameChange.emit(model);
  }

  private change(value: string): void {
    this.onChanged.emit(value);
  }

  get value4() {
    return this._value4;
  }

  constructor() { }

  ngOnInit() {
    console.log(typeof this.value2);
    console.log(typeof this.value1);
  }

}
