import {CharacterSheetSkillsModel} from './character-sheet-skills-model';

export interface CharacterSheetProficiencyModel {
  label: keyof CharacterSheetSkillsModel;
  proficient: boolean;
  modifier: number;
}
