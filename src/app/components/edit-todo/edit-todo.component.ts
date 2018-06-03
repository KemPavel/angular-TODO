import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pk-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTodoComponent implements OnInit {
  public todoForm: FormGroup;
  public data: Observable<any>;
  public ckeditorContent: string = '<p>Some html</p>';
  public selectedTodo: any;
  public todos: any = [
    {id: 'todo1', description: 'description1'},
    {id: 'todo2', description: 'description2'},
    {id: 'todo3', description: 'description3'},
    {id: 'todo4', description: 'description4'}
  ];
  
  public control: FormControl = new FormControl("");
  @Output() add = new EventEmitter<string>(); //move logic from html to here 

  @Input()
  public set reset( value : boolean ) {
    value && this.control.reset();
  }

  constructor(private formBuilder: FormBuilder) { }

  onAdd(val) {
    this.add.next(val);
  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      id: ['', Validators.required],
      description: ''
    });

    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.todos);
      }, 3000);
    });

    let subscription = this.data.subscribe( value => {
      this.selectedTodo = value[0];
      this.selectTodo(this.selectedTodo);
    });

    this.todoForm.valueChanges.subscribe( form => {
      for (let key in form) {
        this.selectedTodo[key] = form[key];
      }
    });
  }

  selectTodo(todo) {
    this.selectedTodo = todo;
    this.todoForm.patchValue({
      id: todo.id || '',
      description: todo.description || ''
    });
  }
}
