import {CharacterSheetStatsAbilitiesModel} from '../models/responses/character-sheet-stats-abilities-model';
import {CharacterSheetStatsSkillsModel} from '../models/responses/character-sheet-stats-skills-model';

/**
 * Get all valid ability names.
 */
export function getAbilityNames(): Array<keyof CharacterSheetStatsAbilitiesModel>{
  return ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
}

/**
 * Get all valid skill names.
 */
export function getSkillNames(): Array<keyof CharacterSheetStatsSkillsModel>{
  return ['acrobatics', 'animalHandling', 'arcana', 'athletics',
    'deception', 'history', 'insight', 'intimidation',
    'investigation', 'medicine', 'nature', 'perception',
    'performance', 'persuasion', 'religion', 'sleightOfHand', 'stealth', 'survival'];
}
