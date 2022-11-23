export class PrimaryAction {
    icon: string;
    fontSet?: string;
    name: string;
    count?: number;
    click?: any;
    subActions?: PrimarySubAction[];
}

export class PrimarySubAction {
    title: string;
    name?: string;
    click?: any;
}

export class PrimaryActionsConfig {
    actions: PrimaryAction[];
}
