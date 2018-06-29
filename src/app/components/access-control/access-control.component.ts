import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { PendingChangesGuard } from '../../guards/pending-changes.guard';

@Component({
  selector: 'pk-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css']
})
export class AccessControlComponent implements OnInit, PendingChangesGuard {
  public isSaved: boolean = false;
  
  public id: number;
  public queryProduct: string;
  public queryPrice: string;
  private querySubsctiption: Subscription;
  private routeSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.routeSubscription = activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id
    });
    this.querySubsctiption = activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.queryPrice = queryParams.price;
      this.queryProduct = queryParams.product;
    })
   }

  ngOnInit() {

  }

  public canDeactivate(): boolean | Observable<boolean> {
    return !this.isSaved ? confirm('are you sure that you want to leave this page?') : true;
  }

  public onSaveClick(): void {
    this.isSaved = !this.isSaved;
  }

}
