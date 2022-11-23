export class NavIconConfig {
    icon: string;
    action?: () => void;
    fontSet?: string;
}

export const DefaultIcon: NavIconConfig = {
    icon: 'menu',
    action: () => { }
};
