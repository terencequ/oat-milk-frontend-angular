import {CharacterSheetStatsModel} from './character-sheet-stats-model';

export interface CharacterSheetStatModel {
  label: keyof CharacterSheetStatsModel;
  value: number;
  proficient: boolean;
  modifier: number;
}
