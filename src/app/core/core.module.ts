import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
