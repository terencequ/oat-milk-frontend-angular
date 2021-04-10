import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BackendApiModule, Configuration, ConfigurationParameters } from './api/backend';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
