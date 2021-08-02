import {CharacterSheetStatsAbilitiesModel} from './character-sheet-stats-abilities-model';

export interface CharacterSheetStatModel {
  label: keyof CharacterSheetStatsAbilitiesModel;
  value: number;
  proficient: boolean;
  modifier: number;
}
