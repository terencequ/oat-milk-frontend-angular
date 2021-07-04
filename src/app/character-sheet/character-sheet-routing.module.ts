import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterSheetListPageComponent} from './pages/character-sheet-list-page/character-sheet-list-page.component';
import {CharacterSheetPageComponent} from './pages/character-sheet-page/character-sheet-page.component';

const routes: Routes = [
  { path: ':name', component: CharacterSheetPageComponent },
  { path: '', component: CharacterSheetListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSheetRoutingModule {
}
