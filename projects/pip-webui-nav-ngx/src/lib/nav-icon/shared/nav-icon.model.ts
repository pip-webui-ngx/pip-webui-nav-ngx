export class NavIconConfig {
  fontSet?: string;
  fontIcon?: string;
  svgIcon?: string;
  action?: () => void;

  constructor(props?: Partial<NavIconConfig>) {
    this.fontSet = props?.fontSet;
    this.fontIcon = props?.fontIcon ?? 'menu';
    this.svgIcon = props?.svgIcon;
    this.action = props?.action;
  }
}
