import { Injectable } from '@angular/core';

import { Phone } from '../models/phone';

import { LogService } from './log.service';

@Injectable()
export class DataService {
  private data: Phone[] = [
    {name: "apple Iphone" , price: 56000}, 
    {name: "HP elite" , price: 12000}, 
    {name: "Alcatel idol" , price: 36000}
  ];

  constructor(private logService: LogService) { }

  getData(): Phone[] {
    this.logService.write('getting data');
    return this.data;
  }

  addData(name: string, price: number): void {
    this.logService.write('adding data');
    this.data.push(new Phone(name, price));
  }


}
