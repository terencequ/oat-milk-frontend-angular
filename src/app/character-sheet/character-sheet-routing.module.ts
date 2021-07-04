import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterSheetListPageComponent} from './pages/character-sheet-list-page/character-sheet-list-page.component';
import {CharacterSheetViewPageComponent} from './pages/character-sheet-view-page/character-sheet-view-page.component';
import {CharacterSheetCreatePageComponent} from './pages/character-sheet-create-page/character-sheet-create-page.component';

const routes: Routes = [
  { path: 'new', component: CharacterSheetCreatePageComponent },
  { path: 'edit/:name', component: CharacterSheetCreatePageComponent },
  { path: 'view/:name', component: CharacterSheetViewPageComponent },
  { path: '', component: CharacterSheetListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSheetRoutingModule {
}
