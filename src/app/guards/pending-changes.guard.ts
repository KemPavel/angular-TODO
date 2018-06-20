import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
  public canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}