import { ThemePalette } from '@angular/material/core';

export class NavIconConfig {
  fontSet?: string;
  fontIcon?: string;
  svgIcon?: string;
  ligature?: boolean;
  color?: ThemePalette | string;
  action?: () => void;

  constructor(props?: Partial<NavIconConfig>) {
    this.fontSet = props?.fontSet;
    this.fontIcon = props?.fontIcon ?? 'menu';
    this.svgIcon = props?.svgIcon;
    this.ligature = props?.ligature;
    this.action = props?.action;
  }
}
