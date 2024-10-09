export class SecondaryAction {
  title: string;
  name?: string;
  click?: any;
  tooltip?: string;
  disabled?: boolean;

  constructor(props?: Partial<SecondaryAction>) {
    this.title = props?.title ?? '';
    this.name = props?.name;
    this.click = props?.click;
    this.tooltip = props?.tooltip;
    this.disabled = props?.disabled;
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
