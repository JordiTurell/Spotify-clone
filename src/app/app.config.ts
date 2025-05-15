import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { tokenInterceptor } from '@infrastructure/interceptor/token/token.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '@infrastructure/interceptor/error/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
     provideHttpClient(withInterceptors([
      tokenInterceptor,
      errorInterceptor
    ]))
  ]
};
