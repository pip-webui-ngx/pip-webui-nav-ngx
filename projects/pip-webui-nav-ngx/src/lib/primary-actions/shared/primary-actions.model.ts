import { NavIconConfig } from '../../nav-icon';

export class PrimaryAction {
  icon: NavIconConfig;
  name: string;
  tooltip?: string;
  count?: number;
  subActions?: PrimarySubAction[];
  disabled?: boolean;

  constructor(props?: Partial<PrimaryAction>) {
    this.icon = new NavIconConfig(props.icon);
    this.name = props?.name;
    this.count = props?.count;
    this.subActions = (props?.subActions ?? []).map((sa) => new PrimarySubAction(sa));
    this.disabled = props?.disabled;
  }
}

export class PrimarySubAction {
  title: string;
  tooltip?: string;
  name?: string;
  action?: () => void;
  disabled?: boolean;

  constructor(props?: Partial<PrimarySubAction>) {
    this.title = props?.title ?? '';
    this.name = props?.name;
    this.action = props?.action;
    this.disabled = props?.disabled;
  }
}

export class PrimaryActionsConfig {
  actions: PrimaryAction[];

  constructor(props?: Partial<PrimaryActionsConfig>) {
    this.actions = (props?.actions ?? []).map((a) => new PrimaryAction(a));
  }
}
