import {ActivatedRoute} from '@angular/router';
import {CharacterResponse, CharacterService, ErrorResponse } from '../../../api/backend';
import {Injectable, OnInit} from '@angular/core';
import {CharacterSheetModel} from '../../models/responses/character-sheet-model';
import {CharacterSheetStatsAbilitiesModel} from '../../models/responses/character-sheet-stats-abilities-model';
import {CharacterSheetStatsSkillsModel} from '../../models/responses/character-sheet-stats-skills-model';
import {getSkillNames, getAbilityNames} from '../../helpers/character-sheet-type.helper';
import {LevelService} from '../../services/level/level.service';

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
   * @param name Character's unique name
   */
  protected async updateCharacterSheet(name: string): Promise<void>{
    try {
      console.log(`Showing character ${name}`);
      const sheet = await this.characterService.characterNameGet(name).toPromise();
      this.characterSheetModel = {
        id: sheet.id ?? '',
        name: sheet.name ?? '',
      } as CharacterSheetModel;
      this.populateCharacterSheetModelLevel(sheet);
      this.populateCharacterSheetModelStatsAbilities(sheet);
      this.populateCharacterSheetModelStatsSkills(sheet);
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      this.overallError = errorResponse.message ?? 'Something unexpected went wrong.';
    }
  }

  /**
   * Populate character sheet level and experience information.
   * @param sheet Character sheet response
   * @param levels Level definitions response
   */
  protected populateCharacterSheetModelLevel(sheet: CharacterResponse): void{
    const levels = this.levelService.getLevels();
    const levelArray = levels.sort((a, b) => (b.experienceRequirement ?? 0) - (a.experienceRequirement ?? 0)) ?? [];
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
   * Populate the character sheet's ability scores.
   * @param sheet Character sheet response
   */
  protected populateCharacterSheetModelStatsAbilities(sheet: CharacterResponse): void{
    for (const name of getAbilityNames()) {
      if (this.characterSheetModel) {
        this.characterSheetModel[name] = sheet[name] ?? 0;
      }
    }
  }

  /**
   * Populate the character sheet's skills.
   * @param sheet Character sheet response
   */
  protected populateCharacterSheetModelStatsSkills(sheet: CharacterResponse): void{
    for (const name of getSkillNames()) {
      if (this.characterSheetModel) {
        this.characterSheetModel[name] = sheet[name] ?? false;
      }
    }
  }

  /**
   * This will retrieve the id from the current character sheet model.
   * If it can't be retrieved, set the overallError variable.
   */
  protected getIdFromCharacterSheet(): string{
    const characterId = this.characterSheetModel?.id ?? null;
    if (characterId == null){
      this.overallError = 'Character not found!';
      return '';
    }
    return characterId;
  }
}
