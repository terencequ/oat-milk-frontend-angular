import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendApiModule, BASE_PATH, Configuration, ConfigurationParameters } from './api/backend';
import { AuthInterceptor } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BackendApiModule
  ],
  providers: [
    {
      provide: Configuration,
      useFactory: () => new Configuration(
        {
          basePath: environment.backendUrl,
        }
      ),
      multi: false
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
