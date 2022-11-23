export class NavMenuLink {
    // Name to refer to the item
    public name: string;
    // Link visible title
    public title: string;
    // Tooltip text
    public tooltipText?: string;
    // Icon name and fontSet
    public icon?: string;
    public fontSet?: string;
    // Flags for disabling standart behaviour
    public disableNavbarClose?: boolean;
    public disableTitleChange?: boolean;
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
    public click?: (event: Event, itemIndex: number, item: NavMenuLink,
        callOnItemSelect: (index: number, item: NavMenuLink) => void) => void;
}

export class NavMenuSection {
    // Name to refer to the section
    public name?: string;
    // Section visible title
    public title?: string;
    // Tooltip text
    public tooltipText?: string;
    // Icon name and fontSet
    public icon?: string;
    public fontSet?: string;
    public isCollapsable?: boolean;
    // Links shown in the section
    public links: NavMenuLink[];
    // Access function
    public access?: (section: NavMenuSection) => boolean;
}

export class NavMenuConfig {
    sections: NavMenuSection[];
    defaultIcon?: string;
}
