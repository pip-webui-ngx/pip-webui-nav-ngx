export class SecondaryAction {
  title: string;
  name?: string;
  click?: any;

  constructor(props?: Partial<SecondaryAction>) {
    this.title = props?.title ?? '';
    this.name = props?.name;
    this.click = props?.click;
  }
}

export class SecondaryActionsConfig {
  openMenuClick?: () => void;
  actions: SecondaryAction[];

  constructor(props?: Partial<SecondaryActionsConfig>) {
    this.openMenuClick = props?.openMenuClick;
    this.actions = (props?.actions ?? []).map((sa) => new SecondaryAction(sa));
  }
}
