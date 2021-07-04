import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheetModel} from '../../models/character-sheet-model';

@Component({
  selector: 'app-character-combat-block',
  templateUrl: './character-combat-block.component.html',
  styleUrls: ['./character-combat-block.component.scss']
})
export class CharacterCombatBlockComponent implements OnInit {

  @Input() characterSheetModel: CharacterSheetModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
