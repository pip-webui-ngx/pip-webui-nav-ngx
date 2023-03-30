export class NavMenuLink {
  // Name to refer to the item
  name: string;
  // Link visible title
  title: string;
  // Tooltip text
  tooltipText?: string;
  // Icon name and fontSet
  icon?: string;
  fontSet?: string;
  svgIcon?: string;
  // Flags for disabling standard behaviour
  disableNavbarClose?: boolean;
  disableTitleChange?: boolean;
  // Counter badge
  count?: number;
  // class for badge style
  badgeStyle?: string;
  // Access function
  access?: (link: NavMenuLink) => boolean;
  // window.location.href
  href?: string;
  // $location.url
  url?: string;
  // $state.go(state, stateParams)
  state?: string;
  // Parameters for $state.go(state, stateParams)
  stateParams?: any;
  // parent state or parent state for selection item
  parentState?: string;
  // $rootScope.broadcast(event)
  event?: string;
  // Click callback
  click?: (
    event: Event,
    itemIndex: number,
    item: NavMenuLink,
    callOnItemSelect: (index: number, item: NavMenuLink) => void,
  ) => void;

  constructor(props?: Partial<NavMenuLink>) {
    this.name = props?.name ?? '';
    this.title = props?.title ?? '';
    this.tooltipText = props?.tooltipText;
    this.icon = props?.icon;
    this.fontSet = props?.fontSet;
    this.disableNavbarClose = props?.disableNavbarClose;
    this.disableTitleChange = props?.disableTitleChange;
    this.count = props?.count;
    this.badgeStyle = props?.badgeStyle;
    this.access = props?.access;
    this.href = props?.href;
    this.url = props?.url;
    this.state = props?.state;
    this.stateParams = props?.stateParams;
    this.parentState = props?.parentState;
    this.event = props?.event;
    this.click = props?.click;
  }
}

export class NavMenuSection {
  // Name to refer to the section
  name?: string;
  // Section visible title
  title?: string;
  // Tooltip text
  tooltipText?: string;
  // Icon name and fontSet
  icon?: string;
  fontSet?: string;
  svgIcon?: string;
  isCollapsable?: boolean;
  // Links shown in the section
  links: NavMenuLink[];
  // Access function
  access?: (section: NavMenuSection) => boolean;

  constructor(props?: Partial<NavMenuSection>) {
    this.name = props?.name;
    this.title = props?.title;
    this.tooltipText = props?.tooltipText;
    this.icon = props?.icon;
    this.fontSet = props?.fontSet;
    this.isCollapsable = props?.isCollapsable;
    this.links = (props?.links ?? []).map((l) => new NavMenuLink(l));
    this.access = props?.access;
  }
}

export class NavMenuConfig {
  sections: NavMenuSection[];
  defaultIcon?: string;

  constructor(props?: Partial<NavMenuConfig>) {
    this.sections = (props?.sections ?? []).map((s) => new NavMenuSection(s));
    this.defaultIcon = props?.defaultIcon;
  }
}
