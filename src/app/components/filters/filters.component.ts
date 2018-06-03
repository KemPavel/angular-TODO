import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pk-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() filters;
  @Output() changeFilter = new EventEmitter<any>();
  public filter: FormControl;

  constructor() {
    this.filter = new FormControl();
  }

  @Input() set active( val ) {
    this.filter.setValue(val);
  }

  ngOnInit() { }

}
