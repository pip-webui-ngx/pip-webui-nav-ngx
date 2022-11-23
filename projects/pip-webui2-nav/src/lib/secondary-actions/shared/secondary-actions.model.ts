export class SecondaryAction {
    title: string;
    name?: string;
    click?: any;
}

export class SecondaryActionsConfig {
    openMenuClick?: any;
    actions: SecondaryAction[];
}
