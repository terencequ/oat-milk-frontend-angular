import {CharacterSheetStatsModel} from './character-sheet-stats-model';
import {CharacterSheetProficienciesModel} from './character-sheet-proficiencies-model';
import {CharacterSheetLevelModel} from './character-sheet-level-model';

export interface CharacterSheetModel extends CharacterSheetLevelModel, CharacterSheetStatsModel, CharacterSheetProficienciesModel {
  id: string;
  name: string;
}
