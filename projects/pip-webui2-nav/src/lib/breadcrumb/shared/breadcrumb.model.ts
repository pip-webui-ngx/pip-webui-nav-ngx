export class BreadcrumbItem {
    title: string = null;
    click?: (item: BreadcrumbItem) => void = null;
    subActions?: any[] = null;
    width?: number;
}

export class BreadcrumbConfig {
    searchCriteria?: string;
    searchClick?: any;
    itemClick?: any;
    items?: BreadcrumbItem[];
}
