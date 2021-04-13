import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetListPageComponent } from './character-sheet-list-page/character-sheet-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterSheetListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSheetRoutingModule { }
