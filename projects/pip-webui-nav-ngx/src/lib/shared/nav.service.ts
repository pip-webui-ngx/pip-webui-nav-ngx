import { Injectable } from '@angular/core';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { BreadcrumbConfig } from '../breadcrumb/shared/breadcrumb.model';
import { NavHeaderConfig } from '../nav-header/shared/nav-header.model';
import { NavIconConfig } from '../nav-icon/shared/nav-icon.model';
import { NavMenuConfig } from '../nav-menu/shared/nav-menu.model';
import { PrimaryActionsConfig } from '../primary-actions/shared/primary-actions.model';
import { SecondaryActionsConfig } from '../secondary-actions/shared/secondary-actions.model';
import { NavConfig, NavConfigEx, NavConfigItem } from './nav-config.model';
import { NavItem } from './nav-item.model';

@Injectable({
  providedIn: 'root',
})
export class PipNavService {
  #config$ = new BehaviorSubject<NavConfigEx>({ ...new NavConfig() });
  #items: NavItem[] = [];

  public toggleSecondaryActions$: Subject<boolean>;

  constructor() {
    this.toggleSecondaryActions$ = new Subject();
  }

  /**
   * @deprecated
   */
  get items(): NavItem[] {
    return this.#items;
  }

  /**
   * Declare config and completely rewrite it
   * @param name Name of the config
   * @param config Config
   */
  declareConfig<T extends NavConfigItem, R extends NavConfig[T]>(name: T, config: R): void;
  declareConfig(name: string, config: any): void;
  declareConfig<T extends NavConfigItem, R extends NavConfig[T]>(name: T | string, config: R | any): void {
    const cfg = this.#config$.value;
    cfg[name] = config;
    this.#config$.next(cfg);
  }

  /**
   * Retrieve config Observable by name
   * @param name
   */
  getConfig<T extends NavConfigItem, R extends NavConfig[T]>(name: T): Observable<R>;
  getConfig(name: string): Observable<any>;
  getConfig<T extends NavConfigItem, R extends NavConfig[T]>(name: T | string): Observable<R | any> {
    return this.#config$.pipe(map((cfg) => cfg[name]));
  }

  /**
   * Retrieve config by name
   * @param name
   */
  getConfigInstant<T extends NavConfigItem, R extends NavConfig[T]>(name: T): R;
  getConfigInstant(name: string): any;
  getConfigInstant<T extends NavConfigItem, R extends NavConfig[T]>(name: T | string): R | any {
    return this.#config$.value[name];
  }

  /**
   * Update config with a new values
   * @param name Name of the config
   * @param config Config
   */
  updateConfig<T extends NavConfigItem, R extends Partial<NavConfig[T]>>(name: T, config: R): void;
  updateConfig(name: string, config: any): void;
  updateConfig<T extends NavConfigItem, R extends Partial<NavConfig[T]>>(name: T | string, config: R | any): void {
    const cfg = this.#config$.value;
    cfg[name] = defaultsDeep(cfg[name] ?? {}, config);
    this.#config$.next(cfg);
  }

  /**
   * @deprecated
   */
  addNewItemByName(name: string, props: any): NavItem {
    const newItem: NavItem = new NavItem();
    newItem.name = name;
    newItem.properties = new BehaviorSubject<any>(props);
    this.#items ? this.#items.push(newItem) : (this.#items = [newItem]);

    return this.#items[this.#items.length - 1];
  }

  /**
   * @deprecated
   */
  addNewItem(newItem: NavItem): NavItem {
    this.#items ? this.#items.push(newItem) : (this.#items = [newItem]);

    return this.#items[this.#items.length - 1];
  }

  /**
   * @deprecated
   */
  private updateItem(newItem: NavItem): NavItem {
    const index: number = this.#items.findIndex((item) => item.name === newItem.name);

    if (index !== -1) {
      this.#items[index].name = newItem.name;
      this.#items[index].properties.next(newItem.properties.value);

      return this.#items[index];
    } else {
      return this.addNewItem(newItem);
    }
  }

  /**
   * @deprecated
   */
  updateItemByName(name: NavConfigItem, props: any): NavItem {
    const index: number = this.#items.findIndex((item) => item.name === name);
    if (index > -1) {
      this.#items[index].name = name;
      if (props != null) {
        this.#items[index].properties.next(props);
      }

      return this.#items[index];
    } else {
      return this.addNewItemByName(name, props);
    }
  }

  /**
   * @deprecated
   */
  private updateProps(name: string, props: any): NavItem | null {
    const index: number = this.#items.findIndex((item) => item.name === name);
    if (index > -1) {
      this.#items[index].properties.next(props);
      return this.#items[index];
    } else {
      console.log('Item not found');
      return null;
    }
  }

  /**
   * @deprecated
   */
  private updateProp(name: string, propName: string, propValue: any): NavItem | null {
    const index: number = this.#items.findIndex((item) => item.name === name);
    if (index > -1) {
      let props: any = this.#items[index].properties.value;

      props ? (props[propName] = propValue) : (props = { propName: propValue });
      this.#items[index].properties.next(props);

      return this.#items[index];
    } else {
      console.log('Item not found');
      return null;
    }
  }

  /**
   * @deprecated
   */
  getItem(name: string): NavItem | null {
    const index: number = this.#items.findIndex((item) => item.name === name);

    return index > -1 ? this.#items[index] : null;
  }

  showBreadcrumb(config: BreadcrumbConfig) {
    this.updateItemByName(NavConfigItem.breadcrumb, config);
    this.declareConfig(NavConfigItem.breadcrumb, config);
  }

  showTitle(title: string) {
    const config: BreadcrumbConfig = {
      items: [
        {
          title: title,
        },
      ],
    };
    this.updateItemByName(NavConfigItem.breadcrumb, config);
    this.declareConfig(NavConfigItem.breadcrumb, config);
  }

  showNavIcon(icon: NavIconConfig) {
    this.updateItemByName(NavConfigItem.navIcon, icon);
    this.declareConfig(NavConfigItem.navIcon, icon);
  }

  showPrimaryActions(primaryActionsConfig: PrimaryActionsConfig) {
    this.updateItemByName(NavConfigItem.primaryActions, primaryActionsConfig);
    this.declareConfig(NavConfigItem.primaryActions, primaryActionsConfig);
  }

  showSecondaryActions(secondaryActionsConfig: SecondaryActionsConfig) {
    this.updateItemByName(NavConfigItem.secondaryActions, secondaryActionsConfig);
    this.declareConfig(NavConfigItem.secondaryActions, secondaryActionsConfig);
  }

  showNavHeader(navHeader: NavHeaderConfig) {
    this.updateItemByName(NavConfigItem.navHeader, navHeader);
    this.declareConfig(NavConfigItem.navHeader, navHeader);
  }

  showNavMenu(navMenu: NavMenuConfig) {
    this.updateItemByName(NavConfigItem.navMenu, navMenu);
    this.declareConfig(NavConfigItem.navMenu, navMenu);
  }

  toggleSecondaryActionsMenu(state: boolean = true) {
    this.toggleSecondaryActions$.next(state);
  }

  configurateNav(navConfig: NavConfig) {
    for (const item of Object.keys(navConfig)) {
      switch (item) {
        case NavConfigItem.breadcrumb: {
          if (navConfig.breadcrumb) {
            this.showBreadcrumb(navConfig.breadcrumb);
          }
          break;
        }
        case NavConfigItem.navIcon: {
          if (navConfig.navIcon) {
            this.showNavIcon(navConfig.navIcon);
          }
          break;
        }
        case NavConfigItem.primaryActions: {
          if (navConfig.primaryActions) {
            this.showPrimaryActions(navConfig.primaryActions);
          }
          break;
        }
        case NavConfigItem.secondaryActions: {
          if (navConfig.secondaryActions) {
            this.showSecondaryActions(navConfig.secondaryActions);
          }
          break;
        }
        case NavConfigItem.navHeader: {
          if (navConfig.navHeader) {
            this.showNavHeader(navConfig.navHeader);
          }
          break;
        }
        case NavConfigItem.navMenu: {
          if (navConfig.navMenu) {
            this.showNavMenu(navConfig.navMenu);
          }
          break;
        }
      }
    }
  }
}
