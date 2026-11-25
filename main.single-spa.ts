import { APP_BASE_HREF } from '@angular/common';
import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { provideSingleSpa, provideSingleSpaPlatform, singleSpaAngular } from 'single-spa-angular';

import { appConfig } from './src/app/app.config';
import { App } from './src/app/app';

interface MicrofrontendProps {
  basePath: string;
}

const lifecycles = singleSpaAngular<MicrofrontendProps>({
  bootstrapFunction: (props) => {
    const platformRef = platformBrowser(provideSingleSpaPlatform());

    return bootstrapApplication(
      App,
      {
        ...appConfig,
        providers: [
          ...appConfig.providers,
          provideSingleSpa(),
          { provide: APP_BASE_HREF, useValue: props.basePath ?? '/' },
        ],
      },
      { platformRef },
    );
  },
  template: '<app-root></app-root>',
  Router,
  NavigationStart,
  NgZone: 'noop',
});

export const { bootstrap, mount, unmount } = lifecycles;
