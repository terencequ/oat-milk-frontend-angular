import { Component, OnInit } from '@angular/core';
import {BaseCharacterSheetPage} from '../abstract/base-character-sheet-page.component';
import {ActivatedRoute} from '@angular/router';
import {CharacterService, LevelService} from '../../../api/backend';


@Component({
  selector: 'app-character-sheet-page',
  templateUrl: './character-sheet-view-page.component.html',
  styleUrls: ['./character-sheet-view-page.component.scss']
})
export class CharacterSheetViewPageComponent extends BaseCharacterSheetPage implements OnInit {
  constructor(route: ActivatedRoute, characterService: CharacterService, levelService: LevelService) {
    super(route, characterService, levelService);
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      await this.updateCharacterSheet(params.name);
    });
  }
}
