import {CharacterSheetStatsSkillsModel} from './character-sheet-stats-skills-model';

export interface CharacterSheetProficiencyModel {
  label: keyof CharacterSheetStatsSkillsModel;
  proficient: boolean;
  modifier: number;
}
