import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  private title: string = 'Put some title here';
  private things: Array<string> = [];
  private date: string;
  private name: string = 'test name for todo';
  private invalid: boolean = false;
  private condition: boolean = true;

  public varToChild1: string = 'Test varaible';
  public varToChild2: number = 42;
  public varToChild3: number = 84;
  public varToChild4: number = 168;

  public value = 'my value';
  public val = 'my val';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    setInterval(() => {
      this.date = new Date().toLocaleTimeString();
      // console.log(this.name);
    }, 1000);
  }

  private onOutput(event: string): void {

    // console.log(typeof event);
  }

  private toggleDirective(): void {
    this.condition = !this.condition;
  }

  private addThing(thing: string): void {
    this.invalid = !this.invalid;
    this.things.push(thing);
  }

  private clearThings(): void {
    this.things = [];
  }
}
