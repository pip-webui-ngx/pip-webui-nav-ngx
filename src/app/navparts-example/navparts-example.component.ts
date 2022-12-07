import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import cloneDeep from 'lodash-es/cloneDeep';
import { PipMediaService, PipSidenavService } from 'pip-webui-layouts-ngx';
import { NavHeaderConfig, PipNavService } from 'pip-webui-nav-ngx';
import { PipThemesService, Theme } from 'pip-webui-themes-ngx';
import { combineLatest, distinctUntilChanged, map, Observable, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-navparts-example',
  templateUrl: './navparts-example.component.html',
  styleUrls: ['./navparts-example.component.scss'],
})
export class NavpartsExampleComponent {
  private isIconShown = true;
  private isBreadcrumbShown = true;
  private isPrimaryActionsShown = true;
  private isSecondaryActionsShown = true;
  private xsIcon = 'menu';
  private gtXsIcon = 'ice-cup';

  breadcrumbTitle1 = 'Navigation';
  breadcrumbTitle2 = 'Nav items configuration long text';
  breadcrumbSearchCriteria = 'Search text';
  ctx$: Observable<{
    currentTheme: Theme;
    isLtMd: boolean;
    language: string;
    themes: Theme[];
  }>;
  isMenuShown = true;
  isHeaderShown = true;
  header: NavHeaderConfig = new NavHeaderConfig();

  constructor(
    private mainMedia: PipMediaService,
    private navService: PipNavService,
    private pipThemes: PipThemesService,
    private sidenav: PipSidenavService,
    private translate: TranslocoService,
  ) {
    this.ctx$ = combineLatest({
      currentTheme: this.pipThemes.currentTheme$,
      isLtMd: this.mainMedia
        .asObservableMain()
        .pipe(map((changes) => changes.aliases.includes('xs') || changes.aliases.includes('sm')))
        .pipe(startWith(this.mainMedia.isMainActive('xs') || this.mainMedia.isMainActive('sm'))),
      language: this.translate.langChanges$.pipe(
        startWith(this.translate.getActiveLang()),
        switchMap(() => this.translate.selectTranslate(this.translate.getActiveLang())),
      ),
      themes: this.pipThemes.themes$.pipe(map((themesMap) => Array.from(themesMap.values()))),
    }).pipe(
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      tap((ctx) => {
        this.navService.showPrimaryActions({
          actions: [
            {
              name: 'custom_font_icon',
              icon: {
                fontIcon: 'ice-run',
                fontSet: 'ice',
                action: () => alert('RUN'),
              },
            },
            {
              name: 'svg_icon',
              icon: {
                svgIcon: 'pip:corn',
                action: () => alert('Corn'),
              },
            },
            {
              name: 'notifications',
              icon: {
                fontIcon: 'notifications',
                action: () => this.sidenav.end.toggle(),
              },
            },
            {
              name: 'translate',
              icon: {
                fontIcon: 'translate',
              },
              subActions: this.translate.getAvailableLangs().map((language) => ({
                title: this.translate.translate(language),
                action: () => this.translate.setActiveLang(language),
              })),
            },
            {
              name: 'theme',
              icon: {
                fontIcon: 'format_color_fill',
              },
              subActions: ctx.themes.map((theme) => ({
                title: theme.displayName,
                action: () => this.pipThemes.selectTheme(theme.name),
              })),
            },
          ],
        });
        this.navService.showNavIcon({
          fontSet: ctx.isLtMd ? undefined : 'ice',
          fontIcon: ctx.isLtMd ? this.xsIcon : this.gtXsIcon,
          action: () => this.sidenav.start.toggle(),
        });
      }),
    );
    this.pipThemes.selectTheme(this.pipThemes.defaultThemeName).then();

    this.navService.showBreadcrumb({
      searchCriteria: this.breadcrumbSearchCriteria,
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 },
        { title: 'Sub title items title' },
        { title: 'SubSub title items text last' },
      ],
    });

    this.navService.showSecondaryActions({
      actions: [{ title: 'Settings' }, { title: 'Sign out' }],
    });

    this.header.title = 'Kate Negrienko';
    this.header.subtitle = 'frontend developer';
    this.header.picture = '/assets/girl.png';

    this.navService.showNavHeader(cloneDeep(this.header));
    this.navService.showNavMenu({
      sections: [
        {
          name: 'appbar',
          title: 'Appbar',
          links: [
            {
              name: 'Nav icons',
              title: 'Nav icons',
              state: 'nav_icons',
              icon: 'archive',
              url: 'navparts',
              tooltipText: 'Nav icons',
            },
            { name: 'Titles', title: 'Titles', state: 'titles', icon: 'list', url: 'navparts' },
          ],
        },
        {
          name: 'collapsable',
          title: 'Actions',
          icon: 'label_important',
          isCollapsable: true,
          links: [
            // tslint:disable-next-line:max-line-length
            { name: 'create', title: 'Create', icon: 'add', url: 'navparts', tooltipText: 'Create' },
            { name: 'edit', title: 'Edit', icon: 'create', url: 'navparts', tooltipText: 'Edit' },
            { name: 'delete', title: 'Delete', icon: 'delete', url: 'navparts', tooltipText: 'Delete' },
          ],
        },
        {
          name: 'sidenav',
          title: 'SideNav and something else',
          icon: 'area',
          links: [
            {
              name: 'StickySideNav',
              title: 'StickySideNav',
              state: 'sticky_sidenav',
              icon: 'backup',
              url: 'navparts',
            },
          ],
        },
      ],
    });
  }

  onToggleIcon(): void {
    this.isIconShown = !this.isIconShown;
  }

  onToggleBreadcrumb(): void {
    this.isBreadcrumbShown = !this.isBreadcrumbShown;
  }

  onTogglePrimaryActions(): void {
    this.isPrimaryActionsShown = !this.isPrimaryActionsShown;
  }

  onToggleSecondaryActions(): void {
    this.isSecondaryActionsShown = !this.isSecondaryActionsShown;
  }

  onChangeIcon(): void {
    this.xsIcon = this.xsIcon === 'menu' ? 'arrow_back' : 'menu';
    this.navService.showNavIcon({
      fontIcon: this.xsIcon,
      action: this.xsIcon === 'menu' ? () => this.sidenav.start.toggle() : null,
    });
  }

  onChangeBreadcrumb(): void {
    this.navService.showBreadcrumb({
      searchCriteria: this.breadcrumbSearchCriteria,
      items: [{ title: this.breadcrumbTitle1 }, { title: this.breadcrumbTitle2 }],
    });
  }

  changeVisibleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  changeVisibleHeader() {
    this.isHeaderShown = !this.isHeaderShown;
  }

  changeHeaderSubtitle() {
    this.navService.showNavHeader(cloneDeep(this.header));
  }

  openSecondaryAction() {
    this.navService.toggleSecondaryActionsMenu();
  }
}
