import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterService, LevelService} from '../../../api/backend';
import {CharacterSheetModel} from '../../models/character-sheet-model';

/**
 * This page is used for editing and creating character sheets.
 */
@Component({
  selector: 'app-character-sheet-edit-page',
  templateUrl: './character-sheet-edit-page.component.html',
  styleUrls: ['./character-sheet-edit-page.component.scss']
})
export class CharacterSheetEditPageComponent implements OnInit {

  characterSheetModel: CharacterSheetModel | null = null;
  overallError: string | null = null;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private levelService: LevelService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      await this.updateCharacterSheet(params.name);
    });
  }

  updateCharacterSheet(name: string): void {

  }

}
