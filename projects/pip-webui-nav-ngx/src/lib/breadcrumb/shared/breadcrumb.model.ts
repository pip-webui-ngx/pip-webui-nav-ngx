export class BreadcrumbItem {
  title: string;
  click?: (item: BreadcrumbItem) => void;
  width?: number;

  constructor(props?: Partial<BreadcrumbItem>) {
    this.title = props?.title ?? '';
    this.click = props?.click;
    this.width = props?.width;
  }
}

export class BreadcrumbConfig {
  searchCriteria?: string;
  searchClick?: any;
  itemClick?: (item: BreadcrumbItem) => void;
  items: BreadcrumbItem[];

  constructor(props?: Partial<BreadcrumbConfig>) {
    this.searchCriteria = props?.searchCriteria;
    this.searchClick = props?.searchClick;
    this.itemClick = props?.itemClick;
    this.items = props?.items ?? [];
  }
}
