import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  public write(logMessage: string): void {
    console.log(logMessage);
  }

}
