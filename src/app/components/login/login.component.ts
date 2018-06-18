import { Component, OnInit } from '@angular/core';

import { Phone } from '../../models/phone';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'pk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public items: Phone[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

  addItem(name: string, price: number): void {
    this.dataService.addData(name, price);
  }

}
