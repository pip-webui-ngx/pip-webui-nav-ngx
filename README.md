# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Navigation controls

![](https://img.shields.io/badge/license-MIT-blue.svg)

Good navigation in complex Line-of-Business applications is absolutely critical. It shall allow users to jump from one page to another and access features quickly and freely. Cumbersome navigation, unintuitive links and lots of clicks can ruin any application. Ease of use and productivity of users in the first place depend on it. Pip.WebUI.Nav module provides controls for global and local navigation.

## Side navigation parts

### Side navigation menu 
**Shows navigation links with optional icons that can be combined into groups**

**Using**

Template:
```html
<pip-nav-menu></pip-nav-menu>
```

Data models:
```typescript
class NavMenuLink {
    // Name to refer to the item
    public name: string;
    // Link visible title
    public title: string;
    // Tooltip text
    public tooltipText?: string;
    // Icon name from $iconProvider
    public icon?: string;
    // Counter badge
    public count?: number;
    // class for badge style
    public badgeStyle?: string;
    // Access function
    public access?: (link: NavMenuLink) => boolean;
    // window.location.href
    public href?: string;
    // $location.url
    public url?: string;
    // $state.go(state, stateParams)
    public state?: string;
    // Parameters for $state.go(state, stateParams)
    public stateParams?: any;
    // parent state or parent state for selection item 
    public parentState?: string;
    // $rootScope.broadcast(event)
    public event?: string;
    // Click callback
    public click?: (link: NavMenuLink) => void;
}

class NavMenuSection {
    // Name to refer to the section
    public name: string;
    // Section visible title
    public title?: string;
    // Tooltip text
    public tooltipText?: string;
    // Icon name from $iconProvider
    public icon?: string;
    // Links shown in the section
    public links: NavMenuLink[];
    // Access function
    public access?: (section: NavMenuSection) => boolean;
}

class NavMenuConfig {
    sections: NavMenuSection[];
    defaultIcon?: string;
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/nav-menu.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/nav-menu.png"/>
</a>

### Side navigation header 
**May contain information about the user or application**

**Using**

Template:
```html
<pip-nav-header></pip-nav-header>
```

Data models:
```typescript
class NavHeaderConfig {
    public title: string;
    public subtitle: string;
    public icon?: string;
    public picture?: string;
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/nav-header.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/nav-header.png"/>
</a>

## Application bar parts

### Application bar icon
**Shows main application icon and processes click on it**

**Using**

Template:
```html
<pip-nav-icon> </pip-nav-icon>
```

Data models:
```typescript
class NavIconConfig {
    icon: string;
    action?: () => void;
}

const DefaultIcon: NavIconConfig = {
    icon: 'menu',
    action: () => {}
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/nav-icon.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/nav-icon.png"/>
</a>

### Application bar breadcrumb
**Shows title or several titles that reveals the user’s location in a website or Web application**

**Using**

Template:
```html
<pip-breadcrumb> </pip-breadcrumb>
```

Data model:
```typescript
class BreadcrumbItem {
    title: string = null;
    click?: (item: BreadcrumbItem) => void = null;   
    subActions?: any[] = null; 
}

class BreadcrumbConfig {
    searchCriteria?: string;
    searchClick?: any;
    itemClick?: any;
    items?: BreadcrumbItem[];
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/breadcrumb.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/breadcrumb.png"/>
</a>

### Application bar primary actions
**Shows extra icons in application bar and processes click on them**

**Using**

Template:
```html
<pip-primary-actions> </pip-primary-actions>
```

Data model:
```typescript
class PrimaryAction {
    icon: string;
    click?: any; 
    subActions?: PrimarySubAction[];
}

class PrimarySubAction {
    title: string;
    click?: any; 
}

class PrimaryActionsConfig {
    actions: PrimaryAction[]
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/primary-actions.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/primary-actions.png"/>
</a>

### Application bar secondary actions
**Shows icon and dropdown menu with links**

**Using**

Template:
```html
<pip-secondary-actions></pip-secondary-actions>
```

Data model:
```typescript
class SecondaryAction {
    title: string;
    click?: any; 
}

class SecondaryActionsConfig {
    openMenuClick?: any;
    actions: SecondaryAction[];
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/secondary-actions.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-nav/raw/master/doc/images/secondary-actions.png"/>
</a>

## Services

### Nav service

**allows to configurate and control the navigation elements: nav header, nav menu, breadcrumb, nav icon, primary and secondary actions, etc.**

**Using**

```typescript
import { PipNavService } from 'pip-webui2-nav';

constructor(
    private navService: PipNavService,
) {
    this.navService.showNavIcon({
      icon: this.gtXsIcon
    });

    this.navService.showBreadcrumb({
      searchCriteria: this.breadcrumbSearchCriteria,
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 }
      ]
    });

    this.navService.showPrimaryActions({
      actions: [
        {
          icon: 'notifications', click: () => {
            this.rightnav.toggleRightnav();
          }
        },
        {
          icon: 'format_color_fill', subActions: this.generatePrimaryActionThemeList()
        }
      ]
    });

    this.navService.showSecondaryActions({
      actions: [
        { title: 'Settings' },
        { title: 'Sign out' }
      ]
    });
}
```

## Installation

To install this module using npm:

```bash
npm install pip-webui2-nav --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.