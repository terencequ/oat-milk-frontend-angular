import {ActivatedRoute} from '@angular/router';
import {CharacterResponse, CharacterService, ErrorResponse, LevelResponsePageResponse, LevelService} from '../../../api/backend';
import {Injectable, OnInit} from '@angular/core';
import {CharacterSheetModel} from '../../models/character-sheet-model';
import {CharacterSheetStatsModel} from '../../models/character-sheet-stats-model';
import {CharacterSheetSkillsModel} from '../../models/character-sheet-skills-model';

/**
 * Abstract class for any page that uses route parameters to retrieve character information.
 * Examples: Page to view one character, page to edit one character
 */
@Injectable()
export abstract class BaseCharacterSheetPage {
  characterSheetModel: CharacterSheetModel | null = null;
  overallError: string | null = null;

  protected constructor(protected route: ActivatedRoute,
                        protected characterService: CharacterService,
                        protected levelService: LevelService) { }

  /**
   * Update this page's view model for a character sheet.
   * @param name
   */
  protected async updateCharacterSheet(name: string): Promise<void>{
    try {
      console.log(`Showing character ${name}`);
      const sheet = await this.characterService.characterNameGet(name).toPromise();
      const levels = await this.levelService.levelGet().toPromise();
      this.characterSheetModel = {
        id: sheet.id ?? '',
        name: sheet.name ?? '',
      } as CharacterSheetModel;
      this.populateCharacterSheetModelLevel(sheet, levels);
      this.populateCharacterSheetModelStats(sheet);
      this.populateCharacterSheetModelSkills(sheet);
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      this.overallError = errorResponse.message ?? 'Something unexpected went wrong.';
    }
  }

  protected getAttribute(sheet: CharacterResponse, type: string): number {
    return sheet.attributes?.find(attr => attr.type?.toLowerCase() === type.toLowerCase())?.baseValue ?? 0;
  }

  /**
   * Populate character sheet level and experience information.
   * @param sheet Character sheet response
   * @param levels Level definitions response
   */
  protected populateCharacterSheetModelLevel(sheet: CharacterResponse, levels: LevelResponsePageResponse): void{
    const levelArray = levels.items?.sort((a, b) => (b.experienceRequirement ?? 0) - (a.experienceRequirement ?? 0)) ?? [];
    const experience = sheet.experience ?? 0;

    let level: number | null = null;
    let previousLevelExperienceRequirement: number | null = null;
    let currentLevelExperienceRequirement: number | null = null;
    let nextLevelExperienceRequirement: number | null = null;
    for (const levelResponse of levelArray) {
      const experienceRequirement = levelResponse?.experienceRequirement ?? 0;
      // Because the array is sorted, first element that exceeds exp requirement is the current level
      if (experience >= experienceRequirement) {
        level = levelResponse.number ?? 1;
        const previousLevel = level - 1;
        previousLevelExperienceRequirement = levelArray.find(l => l.number === previousLevel)?.experienceRequirement ?? null;
        const currentLevel = level;
        currentLevelExperienceRequirement = levelArray.find(l => l.number === currentLevel)?.experienceRequirement ?? null;
        const nextLevel = level + 1;
        nextLevelExperienceRequirement = levelArray.find(l => l.number === nextLevel)?.experienceRequirement ?? null;
        break;
      }
    }

    if (this.characterSheetModel) {
      this.characterSheetModel.level = level ?? 1;
      this.characterSheetModel.previousLevelExperienceRequirement = previousLevelExperienceRequirement;
      this.characterSheetModel.currentLevelExperienceRequirement = currentLevelExperienceRequirement;
      this.characterSheetModel.nextLevelExperienceRequirement = nextLevelExperienceRequirement;
      this.characterSheetModel.experience = experience;
    }
  }

  /**
   * Populate the character sheet's stats.
   * @param sheet Character sheet response
   */
  protected populateCharacterSheetModelStats(sheet: CharacterResponse): void{
    const statNames: Array<keyof CharacterSheetStatsModel> =
      ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    for (const name of statNames) {
      if (this.characterSheetModel) {
        this.characterSheetModel[name] = this.getAttribute(sheet, name);
      }
    }
  }

  /**
   * Populate the character sheet's skills.
   * @param sheet Character sheet response
   */
  protected populateCharacterSheetModelSkills(sheet: CharacterResponse): void{
    const skillNames: Array<keyof CharacterSheetSkillsModel> =
      ['acrobatics', 'animalHandling', 'arcana', 'athletics',
        'deception', 'history', 'insight', 'intimidation',
        'investigation', 'medicine', 'nature', 'perception',
        'performance', 'persuasion', 'religion', 'sleightOfHand', 'stealth', 'survival'];
    for (const name of skillNames) {
      if (this.characterSheetModel) {
        this.characterSheetModel[name] = sheet[name] ?? false;
      }
    }
  }
}
