import { 
  Component,
  Input,
  SimpleChanges, 
  OnChanges, 
  OnInit, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit
 } from '@angular/core';

@Component({
  selector: 'pk-live-cycle',
  templateUrl: './live-cycle.component.html',
  styleUrls: ['./live-cycle.component.css']
})
export class LiveCycleComponent implements OnInit {
  @Input() value: string;
  @Input() val: string;


  constructor() { 
    // console.log('constructor'); 
  }

  public ngOnInit() {
    // console.log('ngOnInit');
  }

  public onValueBlur() {
    console.log('value blured, and this happen cos template variables');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges');
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngDoCheck() {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
  }



}

