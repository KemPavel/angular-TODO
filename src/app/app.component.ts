import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

interface AppState { 
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public message$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { 
    this.message$ = this.store.select('message');
  }

  public goAccessControl(id: number) {
    this.router.navigate(['/access-control', id], {
      queryParams: {
        product: 'iPhone',
        price: 500
      }
    });
  }
}
