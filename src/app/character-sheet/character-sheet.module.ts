import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterSheetListPageComponent} from './pages/character-sheet-list-page/character-sheet-list-page.component';
import {CharacterSheetRoutingModule} from './character-sheet-routing.module';
import { CharacterSheetViewPageComponent } from './pages/character-sheet-view-page/character-sheet-view-page.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterExperienceBarComponent } from './components/character-experience-bar/character-experience-bar.component';
import { CharacterStatComponent } from './components/character-stat/character-stat.component';
import { CharacterStatBlockComponent } from './components/character-stat-block/character-stat-block.component';
import { CharacterCombatBlockComponent } from './components/character-combat-block/character-combat-block.component';
import { CharacterSheetCreatePageComponent } from './pages/character-sheet-create-page/character-sheet-create-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterSheetEditPageComponent } from './pages/character-sheet-edit-page/character-sheet-edit-page.component';

@NgModule({
  declarations: [
    CharacterSheetListPageComponent,
    CharacterSheetViewPageComponent,
    CharacterExperienceBarComponent,
    CharacterStatComponent,
    CharacterStatBlockComponent,
    CharacterCombatBlockComponent,
    CharacterSheetCreatePageComponent,
    CharacterSheetEditPageComponent
  ],
    imports: [
        CommonModule,
        CharacterSheetRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ]
})
export class CharacterSheetModule {
}
