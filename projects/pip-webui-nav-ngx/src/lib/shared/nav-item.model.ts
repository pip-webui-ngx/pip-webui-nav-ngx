import { BehaviorSubject } from 'rxjs';

export class NavItem<T extends any = any> {
  name: string;
  properties: BehaviorSubject<T>;
}
