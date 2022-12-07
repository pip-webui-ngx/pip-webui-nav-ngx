import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PipMediaService } from 'pip-webui-layouts-ngx';
import { PipThemesService } from 'pip-webui-themes-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public messages: any[] = [
    {
      image_src: '/assets/girl.png',
      subject: 'University',
      from: 'Marta',
      content: 'Tommorow you should visit university',
    },
    { image_src: '/assets/boy2.png', subject: 'Party', from: 'Sam', content: 'We are going to have a party' },
    { image_src: '/assets/girl2.png', subject: 'Cats', from: 'April', content: 'look at these kittens!!!' },
    { image_src: '/assets/boy.png', subject: 'Football', from: 'Nick', content: 'Cup is ours' },
  ];

  public constructor(
    domSanitizer: DomSanitizer,
    public media: PipMediaService,
    private themesService: PipThemesService,
    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.registerFontClassAlias('ice', 'ice');
    this.matIconRegistry.addSvgIconResolver((name: string, namespace: string) =>
      namespace === 'pip'
        ? domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/pip/${name}.svg`)
        : null,
    );
  }
}
