import { BehaviorSubject } from 'rxjs';

export class NavItem {
    name: string;
    properties: BehaviorSubject<any>;
}
