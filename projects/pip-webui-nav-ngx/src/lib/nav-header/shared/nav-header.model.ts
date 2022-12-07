export class NavHeaderConfig {
  title: string;
  subtitle: string;
  icon?: string;
  picture?: string;

  constructor(props?: Partial<NavHeaderConfig>) {
    this.title = props?.title ?? '';
    this.subtitle = props?.subtitle ?? '';
    this.icon = props?.icon;
    this.picture = props?.picture;
  }
}
