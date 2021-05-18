import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AttributeResponse, CharacterResponse, CharacterService, ErrorResponse} from '../../api/backend';
import {CharacterSheetModel} from '../models/character-sheet-model';


@Component({
  selector: 'app-character-sheet-page',
  templateUrl: './character-sheet-page.component.html',
  styleUrls: ['./character-sheet-page.component.scss']
})
export class CharacterSheetPageComponent implements OnInit {

  characterSheetModel: CharacterSheetModel | null = null;
  overallError: string | null = null;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      await this.updateCharacterSheet(params.name);
    });
  }

  async updateCharacterSheet(name: string): Promise<void>{
    try {
      console.log(`Showing character ${name}`);
      const sheet = await this.characterService.characterNameGet(name).toPromise();
      this.characterSheetModel = {
        id: sheet.id ?? '',
        name: sheet.name ?? '',
        experience: sheet.experience ?? 0,

        strength: this.getAttribute(sheet, 'strength')?.baseValue ?? 0,
        dexterity: this.getAttribute(sheet, 'dexterity')?.baseValue ?? 0,
        constitution: this.getAttribute(sheet, 'constitution')?.baseValue ?? 0,
        intelligence: this.getAttribute(sheet, 'intelligence')?.baseValue ?? 0,
        wisdom: this.getAttribute(sheet, 'wisdom')?.baseValue ?? 0,
        charisma: this.getAttribute(sheet, 'charisma')?.baseValue ?? 0,

        acrobatics: sheet.acrobatics ?? false,
        animalHandling: sheet.animalHandling ?? false,
        arcana: sheet.arcana ?? false,
        athletics: sheet.athletics ?? false,
        deception: sheet.deception ?? false,
        history: sheet.history ?? false,
        insight: sheet.insight ?? false,
        intimidation: sheet.intimidation ?? false,
        investigation: sheet.investigation ?? false,
        medicine: sheet.medicine ?? false,
        nature: sheet.nature ?? false,
        perception: sheet.perception ?? false,
        performance: false, // sheet.performance ?? false,
        religion: sheet.religion ?? false,
        sleightOfHand: sheet.sleightOfHand ?? false,
        stealth: sheet.stealth ?? false,
        survival: sheet.survival ?? false,
      };
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      this.overallError = errorResponse.message ?? 'Something unexpected went wrong.';
    }
  }

  getAttribute(sheet: CharacterResponse, type: string): AttributeResponse | null {
    return sheet.attributes?.find(attr => attr.type === 'strength') ?? null;
  }
}
