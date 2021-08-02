import {CharacterSheetStatsAbilitiesModel} from './character-sheet-stats-abilities-model';
import {CharacterSheetStatsSkillsModel} from './character-sheet-stats-skills-model';
import {CharacterSheetLevelModel} from './character-sheet-level-model';

export interface CharacterSheetModel extends CharacterSheetLevelModel, CharacterSheetStatsAbilitiesModel, CharacterSheetStatsSkillsModel {
  id: string;
  name: string;
}
