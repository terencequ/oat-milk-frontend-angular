import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterService, LevelService} from '../../../api/backend';
import {CharacterSheetModel} from '../../models/character-sheet-model';
import {BaseCharacterSheetPage} from '../abstract/base-character-sheet-page.component';

/**
 * This page is used for editing and creating character sheets.
 */
@Component({
  selector: 'app-character-sheet-edit-page',
  templateUrl: './character-sheet-create-page.component.html',
  styleUrls: ['./character-sheet-create-page.component.scss']
})
export class CharacterSheetCreatePageComponent extends BaseCharacterSheetPage {

  constructor(route: ActivatedRoute, characterService: CharacterService, levelService: LevelService) {
    super(route, characterService, levelService);
  }

}
