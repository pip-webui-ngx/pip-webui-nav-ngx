import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavMenuLink, NavMenuSection } from './shared/nav-menu.model';

@Component({
  selector: 'pip-nav-menu-section',
  templateUrl: 'nav-menu-section.component.html',
  styleUrls: ['nav-menu-section.component.scss'],
})
export class PipNavMenuSectionComponent {
  isFunction = (val: any): boolean => val && typeof val === 'function';

  @Input() section: NavMenuSection;
  @Input() sectionIndex: number;
  @Input() selectedSectionIndex: number;
  @Input() selectedItemIndex: number;

  @Output() select: EventEmitter<{ index: number; item: NavMenuLink }>;
  public callOnSelectFn = (index: number, item: NavMenuLink) => this.onItemSelect(index, item);

  public constructor() {
    this.select = new EventEmitter();
  }

  onItemSelect(index: number, item: NavMenuLink): void {
    this.select.emit({
      index: index,
      item: item,
    });
  }
}
