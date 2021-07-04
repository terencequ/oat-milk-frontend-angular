import { Component, OnInit } from '@angular/core';
import {BaseCharacterSheetPage} from '../abstract/base-character-sheet-page';
import {ActivatedRoute} from '@angular/router';
import {CharacterService, LevelService} from '../../../api/backend';


@Component({
  selector: 'app-character-sheet-page',
  templateUrl: './character-sheet-page.component.html',
  styleUrls: ['./character-sheet-page.component.scss']
})
export class CharacterSheetPageComponent extends BaseCharacterSheetPage implements OnInit {
  constructor(route: ActivatedRoute, characterService: CharacterService, levelService: LevelService) {
    super(route, characterService, levelService);
  }
}
