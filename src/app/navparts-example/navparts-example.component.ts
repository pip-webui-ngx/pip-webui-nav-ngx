import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep, each } from 'lodash';
import { PipSidenavService, PipMediaService, MediaMainChange, PipRightnavService } from 'pip-webui2-layouts';
import { PipNavService, NavHeaderConfig } from 'pip-webui2-nav';
import { PipThemesService, Theme } from 'pip-webui2-themes';

@Component({
    selector: 'app-navparts-example',
    templateUrl: './navparts-example.component.html',
    styleUrls: ['./navparts-example.component.scss']
})
export class NavpartsExampleComponent implements OnInit {

    private isIconShown = true;
    private isBreadcrumbShown = true;
    private isPrimaryActionsShown = true;
    private isSecondaryActionsShown = true;
    private xsIcon = 'menu';
    private gtXsIcon = 'ice-cup';

    public appbarIconPartName = 'appbar-icon';
    public appbarBreadcrumbPartName = 'appbar-breadcrumb';
    public appbarPrimaryActionsPartName = 'appbar-primary-actions';
    public appbarSecondaryActionsPartName = 'appbar-secondary-actions';
    public breadcrumbTitle1 = 'Navigation';
    public breadcrumbTitle2 = 'Nav items configuration long text';
    public breadcrumbSearchCriteria = 'Search text';
    public sidenavMenuPartName = 'sidenav-menu';
    public sidenavHeaderPartName = 'sidenav-header';
    public isMenuShown = true;
    public isHeaderShown = true;
    public header: NavHeaderConfig = new NavHeaderConfig();
    public themes: Theme[];
    public theme: Theme;
    public themesLocalNames: any = {
        'candy-theme': 'Candy',
        'unicorn-dark-theme': 'Unicorn Dark',
        'pip-blue-theme': 'Blue',
        'pip-grey-theme': 'Grey',
        'pip-pink-theme': 'Pink',
        'pip-green-theme': 'Green',
        'pip-navy-theme': 'Navy',
        'pip-amber-theme': 'Amber',
        'pip-orange-theme': 'Orange',
        'pip-dark-theme': 'Dark',
        'pip-black-theme': 'Black',
        'bootbarn-warm-theme': 'Bootbarn Warm',
        'bootbarn-cool-theme': 'Bootbarn Cool',
        'bootbarn-mono-theme': 'Bootbarn Mono',
        'mst-black-theme': 'MST Black',
        'mst-black-dark-theme': 'MST Black Dark',
        'mst-mono-theme': 'MST Mono',
        'mst-orange-theme': 'MST Orange',
        'mst-orange-dark-theme': 'MST Orange Dark',
        'mst-elegant-theme': 'MST Elegant Dark'
    };

    constructor(
        private navService: PipNavService,
        private sidenav: PipSidenavService,
        private rightnav: PipRightnavService,
        private mainMedia: PipMediaService,
        private themesService: PipThemesService,
        private translate: TranslateService
    ) {
        this.mainMedia.asObservableMain().subscribe((change: MediaMainChange) => {
            const is = change.aliases.includes('xs') || change.aliases.includes('sm');
            this.navService.showNavIcon({
                fontSet: 'ice',
                icon: is ? this.xsIcon : this.gtXsIcon,
                action: is ? () => {
                    this.sidenav.toggleNav();
                } : null
            });
        });

        this.navService.showNavIcon({
            icon: this.gtXsIcon
        });

        this.navService.showBreadcrumb({
            searchCriteria: this.breadcrumbSearchCriteria,
            items: [
                { title: this.breadcrumbTitle1 },
                { title: this.breadcrumbTitle2 },
                { title: 'Sub tite items title' },
                { title: 'Subsub tite items text last' }
            ]
        });

        this.navService.showPrimaryActions({
            actions: [
                {
                    name: 'custom_font_icon',
                    icon: 'ice-run',
                    fontSet: 'ice',
                    click: () => { }
                },
                {
                    name: 'notifications',
                    icon: 'notifications',
                    click: () => {
                        this.rightnav.toggleRightnav();
                    }
                },
                {
                    name: 'translate',
                    icon: 'translate',
                    subActions: this.generatePrimaryActionLanguageList()
                },
                {
                    name: 'theme',
                    icon: 'format_color_fill',
                    subActions: this.generatePrimaryActionThemeList()
                }
            ]
        });

        this.navService.showSecondaryActions({
            actions: [
                { title: 'Settings' },
                { title: 'Sign out' }
            ]
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
                        // tslint:disable-next-line:max-line-length
                        { name: 'Nav icons', title: 'Nav icons', state: 'nav_icons', icon: 'archive', url: 'navparts', tooltipText: 'Nav icons' },
                        { name: 'Titles', title: 'Titles', state: 'titles', icon: 'list', url: 'navparts' },
                    ]
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
                    ]
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
                            url: 'navparts'
                        }
                    ]
                }
            ]
        });
    }

    ngOnInit() {
        this.selectTheme(this.themesService.selectedTheme);
    }

    private selectTheme(selectedTheme) {
        this.themesService.selectedTheme = selectedTheme;
        this.theme = selectedTheme;
    }

    private generatePrimaryActionLanguageList() {
        const list = [];

        each(this.translate.langs, (language) => {
            this.translate.get(language).subscribe((t: string) => {
                list.push({
                    title: t,
                    click: () => {
                        this.translate.use(language);
                    }
                });
            });
        });

        return list;
    }

    private generatePrimaryActionThemeList() {
        const list = [];

        each(this.themesService.themes, (theme) => {
            list.push({
                title: this.themesLocalNames[theme.name],
                name: theme.name,
                click: () => {
                    this.selectTheme(theme);
                }
            });
        });

        return list;
    }

    public onToogleIcon(): void {
        this.isIconShown = !this.isIconShown;
    }

    public onToogleBreadcrumb(): void {
        this.isBreadcrumbShown = !this.isBreadcrumbShown;
    }

    public onTooglePrimaryActions(): void {
        this.isPrimaryActionsShown = !this.isPrimaryActionsShown;
    }

    public onToogleSecondaryActions(): void {
        this.isSecondaryActionsShown = !this.isSecondaryActionsShown;
    }

    public onChangeIcon(): void {
        this.xsIcon = this.xsIcon === 'menu' ? 'arrow_back' : 'menu';
        this.navService.showNavIcon({
            icon: this.xsIcon
        });
    }

    public onChangeBreadcrumb(): void {
        this.navService.showBreadcrumb({
            searchCriteria: this.breadcrumbSearchCriteria,
            items: [
                { title: this.breadcrumbTitle1 },
                { title: this.breadcrumbTitle2 }
            ]
        });
    }

    public changeVisibleMenu() {
        this.isMenuShown = !this.isMenuShown;
    }

    public changeVisibleHeader() {
        this.isHeaderShown = !this.isHeaderShown;
    }

    public changeHeaderSubtitle() {
        this.navService.showNavHeader(cloneDeep(this.header));
    }

    public openSecondaryAction() {
        this.navService.toggleSecondaryActionsMenu();
    }

}
