import { BreadcrumbConfig } from '../breadcrumb/shared/breadcrumb.model';
import { NavIconConfig } from '../nav-icon/shared/nav-icon.model';
import { PrimaryActionsConfig } from '../primary-actions/shared/primary-actions.model';
import { SecondaryActionsConfig } from '../secondary-actions/shared/secondary-actions.model';
import { NavHeaderConfig } from '../nav-header/shared/nav-header.model';
import { NavMenuConfig } from '../nav-menu/shared/nav-menu.model';

export class NavConfig {
    breadcrumb?: BreadcrumbConfig;
    navIcon?: NavIconConfig;
    primaryActions?: PrimaryActionsConfig;
    secondaryActions?: SecondaryActionsConfig;
    navHeader?: NavHeaderConfig;
    navMenu?: NavMenuConfig;
}
