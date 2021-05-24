import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterSheetListPageComponent} from './character-sheet-list-page/character-sheet-list-page.component';
import {CharacterSheetRoutingModule} from './character-sheet-routing.module';
import { CharacterSheetPageComponent } from './character-sheet-page/character-sheet-page.component';
import {SharedModule} from '../shared/shared.module';
import { CharacterExperienceBarComponent } from './components/character-experience-bar/character-experience-bar.component';
import { CharacterStatComponent } from './components/character-stat/character-stat.component';
import { CharacterStatBlockComponent } from './components/character-stat-block/character-stat-block.component';
import { CharacterCombatBlockComponent } from './components/character-combat-block/character-combat-block.component';

@NgModule({
  declarations: [CharacterSheetListPageComponent, CharacterSheetPageComponent, CharacterExperienceBarComponent, CharacterStatComponent, CharacterStatBlockComponent, CharacterCombatBlockComponent],
  imports: [
    CommonModule,
    CharacterSheetRoutingModule,
    SharedModule,
  ]
})
export class CharacterSheetModule {
}
