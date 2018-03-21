import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private title: string = 'Put some title here';
  private things: Array<string> = [];
  private date: string;
  private name: string = 'test name for todo';

  public varToChild1: string = 'Test varaible';
  public varToChild2: number = 42;
  public varToChild3: number = 84;
  public varToChild4: number = 168;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.date = new Date().toLocaleTimeString();
      console.log(this.name);
    }, 1000);
  }

  private onOutput(event: string): void {

    console.log(typeof event);
  }

  private addThing(thing: string): void {
    this.things.push(thing);
  }

  private clearThings(): void {
    this.things = [];
  }
}
