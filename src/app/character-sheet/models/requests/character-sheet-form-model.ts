import {CharacterSheetLevelModel} from '../responses/character-sheet-level-model';
import {CharacterSheetStatsAbilitiesModel} from '../responses/character-sheet-stats-abilities-model';
import {CharacterSheetStatsSkillsModel} from '../responses/character-sheet-stats-skills-model';

export interface CharacterSheetFormModel{
  name: string;
  experience: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  acrobatics: boolean;
  animalHandling: boolean;
  arcana: boolean;
  athletics: boolean;
  deception: boolean;
  history: boolean;
  insight: boolean;
  intimidation: boolean;
  investigation: boolean;
  medicine: boolean;
  nature: boolean;
  perception: boolean;
  performance: boolean;
  persuasion: boolean;
  religion: boolean;
  sleightOfHand: boolean;
  stealth: boolean;
  survival: boolean;
}
