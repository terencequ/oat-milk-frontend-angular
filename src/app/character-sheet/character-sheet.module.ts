import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterSheetListPageComponent} from './character-sheet-list-page/character-sheet-list-page.component';
import {CharacterSheetRoutingModule} from './character-sheet-routing.module';
import { CharacterSheetPageComponent } from './character-sheet-page/character-sheet-page.component';

@NgModule({
  declarations: [CharacterSheetListPageComponent, CharacterSheetPageComponent],
  imports: [
    CommonModule,
    CharacterSheetRoutingModule,
  ]
})
export class CharacterSheetModule {
}
