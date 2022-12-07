import { BreadcrumbConfig } from '../breadcrumb/shared/breadcrumb.model';
import { NavHeaderConfig } from '../nav-header/shared/nav-header.model';
import { NavIconConfig } from '../nav-icon/shared/nav-icon.model';
import { NavMenuConfig } from '../nav-menu/shared/nav-menu.model';
import { PrimaryActionsConfig } from '../primary-actions/shared/primary-actions.model';
import { SecondaryActionsConfig } from '../secondary-actions/shared/secondary-actions.model';

export enum NavConfigItem {
  breadcrumb = 'breadcrumb',
  navIcon = 'navIcon',
  primaryActions = 'primaryActions',
  secondaryActions = 'secondaryActions',
  navHeader = 'navHeader',
  navMenu = 'navMenu',
}

export class NavConfig {
  [NavConfigItem.breadcrumb]: BreadcrumbConfig;
  [NavConfigItem.navIcon]: NavIconConfig;
  [NavConfigItem.primaryActions]: PrimaryActionsConfig;
  [NavConfigItem.secondaryActions]: SecondaryActionsConfig;
  [NavConfigItem.navHeader]: NavHeaderConfig;
  [NavConfigItem.navMenu]: NavMenuConfig;

  constructor(props?: Partial<NavConfig>) {
    this[NavConfigItem.breadcrumb] = new BreadcrumbConfig(props?.[NavConfigItem.breadcrumb]);
    this[NavConfigItem.navIcon] = new NavIconConfig(props?.[NavConfigItem.navIcon]);
    this[NavConfigItem.primaryActions] = new PrimaryActionsConfig(props?.[NavConfigItem.primaryActions]);
    this[NavConfigItem.secondaryActions] = new SecondaryActionsConfig(props?.[NavConfigItem.secondaryActions]);
    this[NavConfigItem.navHeader] = new NavHeaderConfig(props?.[NavConfigItem.navHeader]);
    this[NavConfigItem.navMenu] = new NavMenuConfig(props?.[NavConfigItem.navMenu]);
  }
}

export type NavConfigEx = NavConfig & { [key: string]: any };
