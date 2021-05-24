import {CharacterSheetProficienciesModel} from './character-sheet-proficiencies-model';

export interface CharacterSheetProficiencyModel {
  label: keyof CharacterSheetProficienciesModel;
  proficient: boolean;
  modifier: number;
}
