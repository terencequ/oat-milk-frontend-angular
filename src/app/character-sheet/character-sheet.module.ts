import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetListPageComponent } from './character-sheet-list-page/character-sheet-list-page.component';
import { CharacterSheetRoutingModule } from './character-sheet-routing.module';

@NgModule({
  declarations: [CharacterSheetListPageComponent],
  imports: [
    CommonModule,
    CharacterSheetRoutingModule,
  ]
})
export class CharacterSheetModule { }
