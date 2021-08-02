import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheetModel} from '../../models/responses/character-sheet-model';
import {CharacterSheetStatsAbilitiesModel} from '../../models/responses/character-sheet-stats-abilities-model';
import {CharacterSheetStatsSkillsModel} from '../../models/responses/character-sheet-stats-skills-model';
import {CharacterSheetStatModel} from '../../models/responses/character-sheet-stat-model';
import {CharacterSheetProficiencyModel} from '../../models/responses/character-sheet-proficiency-model';

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

  getStatNames(): Array<keyof CharacterSheetStatsAbilitiesModel>{
    return ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  }

  getStatModel(statName: keyof CharacterSheetStatsAbilitiesModel): CharacterSheetStatModel{
    return {
      label: statName,
      value: this.getStatValue(statName),
      modifier: this.getStatModifier(statName),
      proficient: false
    };
  }

  getStatValue(statName: keyof CharacterSheetStatsAbilitiesModel): number{
    return this.characterSheetModel ? this.characterSheetModel[statName] : 0;
  }

  getStatModifier(statName: keyof CharacterSheetStatsAbilitiesModel): number{
    const value = this.getStatValue(statName);
    return Math.floor((value - 10) / 2);
  }

  getStatProficiencies(statName: keyof CharacterSheetStatsAbilitiesModel): Array<CharacterSheetProficiencyModel>{
    let proficiencyNames: Array<keyof CharacterSheetStatsSkillsModel> = [];
    switch (statName){
      case 'strength':
        proficiencyNames = ['athletics'];
        break;
      case 'dexterity':
        proficiencyNames = ['acrobatics', 'sleightOfHand', 'stealth'];
        break;
      case 'constitution':
        proficiencyNames = [];
        break;
      case 'intelligence':
        proficiencyNames = ['arcana', 'history', 'investigation', 'nature', 'arcana'];
        break;
      case 'wisdom':
        proficiencyNames = ['animalHandling', 'insight', 'medicine', 'perception', 'survival'];
        break;
      case 'charisma':
        proficiencyNames = ['deception', 'intimidation', 'performance', 'persuasion'];
        break;
      default:
        proficiencyNames = [];
        break;
    }

    return proficiencyNames.map(value => {
      return {
        label: value,
        proficient: this.characterSheetModel ? this.characterSheetModel[value] : false,
        modifier: this.getStatModifier(statName)
      };
    });
  }
}
