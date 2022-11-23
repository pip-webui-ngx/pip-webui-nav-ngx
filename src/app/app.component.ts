import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { PipMediaService } from 'pip-webui2-layouts';
import { PipThemesService } from 'pip-webui2-themes';

import { AppTranslations } from './app.strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public messages: any[] = [
    { image_src: '/assets/girl.png', subject: 'University', from: 'Marta', content: 'Tommorow you should visit university' },
    { image_src: '/assets/boy2.png', subject: 'Party', from: 'Sam', content: 'We are going to have a party' },
    { image_src: '/assets/girl2.png', subject: 'Cats', from: 'April', content: 'look at these kittens!!!' },
    { image_src: '/assets/boy.png', subject: 'Football', from: 'Nick', content: 'Cup is ours' }
  ];

  public constructor(
    public media: PipMediaService,
    private themesService: PipThemesService,
    private matIconRegistry: MatIconRegistry,
    private translate: TranslateService,
  ) {
    this.media.activate();
    this.themesService.selectedTheme = this.themesService.themes[0];
    this.matIconRegistry.registerFontClassAlias('ice', 'ice');
    this.translate.use('en');
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);
  }
}
