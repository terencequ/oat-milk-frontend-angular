import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo/logo.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [LogoComponent, ProgressBarComponent],
  imports: [
    CommonModule
  ],
    exports: [
        LogoComponent,
        ProgressBarComponent
    ]
})
export class SharedModule {
}
