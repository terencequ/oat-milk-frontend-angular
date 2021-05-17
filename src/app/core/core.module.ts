import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavigationBarComponent} from './navigation/top-navigation-bar/top-navigation-bar.component';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HamburgerNavigationBarComponent} from './navigation/hamburger-navigation-bar/hamburger-navigation-bar.component';

@NgModule({
  declarations: [TopNavigationBarComponent, HamburgerNavigationBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    TopNavigationBarComponent,
    HamburgerNavigationBarComponent
  ]
})
export class CoreModule {
}
