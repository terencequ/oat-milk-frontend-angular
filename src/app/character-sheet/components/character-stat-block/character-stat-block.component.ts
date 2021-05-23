import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheetModel} from '../../models/character-sheet-model';
import {CharacterSheetStatsModel} from '../../models/character-sheet-stats-model';

@Component({
  selector: 'app-character-stat-block',
  templateUrl: './character-stat-block.component.html',
  styleUrls: ['./character-stat-block.component.scss']
})
export class CharacterStatBlockComponent implements OnInit {

  @Input() characterSheetModel: CharacterSheetModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  getStatNames(): Array<keyof CharacterSheetStatsModel>{
    return ['strength', 'dexterity', 'constitution', 'intelligence', 'intelligence', 'wisdom', 'charisma'];
  }

  getStatValue(statName: keyof CharacterSheetStatsModel): number{
    return this.characterSheetModel ? this.characterSheetModel[statName] : 0;
  }

  getStatModifier(statName: keyof CharacterSheetStatsModel): number{
    const value = this.getStatValue(statName);
    return Math.floor((value - 10) / 2);
  }

}
