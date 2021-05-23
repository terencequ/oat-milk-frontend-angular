import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  AttributeResponse,
  CharacterResponse,
  CharacterService,
  ErrorResponse,
  LevelResponsePageResponse,
  LevelService
} from '../../api/backend';
import {CharacterSheetModel} from '../models/character-sheet-model';
import {CharacterSheetStatsModel} from '../models/character-sheet-stats-model';
import {CharacterSheetProficienciesModel} from '../models/character-sheet-proficiencies-model';


@Component({
  selector: 'app-character-sheet-page',
  templateUrl: './character-sheet-page.component.html',
  styleUrls: ['./character-sheet-page.component.scss']
})
export class CharacterSheetPageComponent implements OnInit {

  characterSheetModel: CharacterSheetModel | null = null;
  overallError: string | null = null;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private levelService: LevelService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      await this.updateCharacterSheet(params.name);
    });
  }

  async updateCharacterSheet(name: string): Promise<void>{
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
      this.populateCharacterSheetModelProficiencies(sheet);
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      this.overallError = errorResponse.message ?? 'Something unexpected went wrong.';
    }
  }

  getAttribute(sheet: CharacterResponse, type: string): number {
    return sheet.attributes?.find(attr => attr.type?.toLowerCase() === type.toLowerCase())?.baseValue ?? 0;
  }

  populateCharacterSheetModelLevel(sheet: CharacterResponse, levels: LevelResponsePageResponse): void{
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

  populateCharacterSheetModelStats(sheet: CharacterResponse): void{
    const statNames: Array<keyof CharacterSheetStatsModel> =
      ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    for (const name of statNames) {
      if (this.characterSheetModel) {
        this.characterSheetModel[name] = this.getAttribute(sheet, name);
      }
    }
  }

  populateCharacterSheetModelProficiencies(sheet: CharacterResponse): void{
    const proficiencyNames: Array<keyof CharacterSheetProficienciesModel> =
      ['acrobatics', 'animalHandling', 'arcana', 'athletics',
        'deception', 'history', 'insight', 'intimidation',
        'investigation', 'medicine', 'nature', 'perception',
        'performance', 'religion', 'sleightOfHand', 'stealth', 'survival'];
    for (const name of proficiencyNames) {
      if (this.characterSheetModel) {
        this.characterSheetModel[name] = sheet[name] ?? false;
      }
    }
  }
}
