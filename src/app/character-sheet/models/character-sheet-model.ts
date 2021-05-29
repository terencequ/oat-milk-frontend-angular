import {CharacterSheetStatsModel} from './character-sheet-stats-model';
import {CharacterSheetSkillsModel} from './character-sheet-skills-model';
import {CharacterSheetLevelModel} from './character-sheet-level-model';

export interface CharacterSheetModel extends CharacterSheetLevelModel, CharacterSheetStatsModel, CharacterSheetSkillsModel {
  id: string;
  name: string;
}
