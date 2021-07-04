import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterSheetListPageComponent} from './pages/character-sheet-list-page/character-sheet-list-page.component';
import {CharacterSheetRoutingModule} from './character-sheet-routing.module';
import { CharacterSheetPageComponent } from './pages/character-sheet-page/character-sheet-page.component';
import {SharedModule} from '../shared/shared.module';
import { CharacterExperienceBarComponent } from './components/character-experience-bar/character-experience-bar.component';
import { CharacterStatComponent } from './components/character-stat/character-stat.component';
import { CharacterStatBlockComponent } from './components/character-stat-block/character-stat-block.component';
import { CharacterCombatBlockComponent } from './components/character-combat-block/character-combat-block.component';
import { CharacterSheetEditPageComponent } from './pages/character-sheet-edit-page/character-sheet-edit-page.component';
import { CharacterStatEditComponent } from './components/character-stat-edit/character-stat-edit.component';

@NgModule({
  declarations: [CharacterSheetListPageComponent, CharacterSheetPageComponent, CharacterExperienceBarComponent, CharacterStatComponent, CharacterStatBlockComponent, CharacterCombatBlockComponent, CharacterSheetEditPageComponent, CharacterStatEditComponent],
  imports: [
    CommonModule,
    CharacterSheetRoutingModule,
    SharedModule,
  ]
})
export class CharacterSheetModule {
}
