import { NavIconConfig } from '../../nav-icon';

export class PrimaryAction {
  icon: NavIconConfig;
  name: string;
  tooltip?: string;
  count?: number;
  subActions?: PrimarySubAction[];

  constructor(props?: Partial<PrimaryAction>) {
    this.icon = new NavIconConfig(props.icon);
    this.name = props?.name;
    this.count = props?.count;
    this.subActions = (props?.subActions ?? []).map((sa) => new PrimarySubAction(sa));
  }
}

export class PrimarySubAction {
  title: string;
  tooltip?: string;
  name?: string;
  action?: () => void;

  constructor(props?: Partial<PrimarySubAction>) {
    this.title = props?.title ?? '';
    this.name = props?.name;
    this.action = props?.action;
  }
}

export class PrimaryActionsConfig {
  actions: PrimaryAction[];

  constructor(props?: Partial<PrimaryActionsConfig>) {
    this.actions = (props?.actions ?? []).map((a) => new PrimaryAction(a));
  }
}
