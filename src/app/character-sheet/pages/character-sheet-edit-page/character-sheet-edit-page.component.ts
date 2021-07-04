import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService, ErrorResponse, LevelService} from '../../../api/backend';
import {BaseCharacterSheetFormPage} from '../abstract/base-character-sheet-form-page.component';
import {getAbilityNames} from '../../helpers/character-sheet-type.helper';

@Component({
  selector: 'app-character-sheet-edit-page',
  templateUrl: './character-sheet-edit-page.component.html',
  styleUrls: ['./character-sheet-edit-page.component.scss']
})
export class CharacterSheetEditPageComponent extends BaseCharacterSheetFormPage implements OnInit {

  characterIdentifier: string | null = null;

  constructor(private router: Router,
              formBuilder: FormBuilder,
              route: ActivatedRoute,
              characterService: CharacterService,
              levelService: LevelService) {
    super(formBuilder, route, characterService, levelService);
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      await this.updateCharacterSheet(params.name);
      this.updateFormWithCharacterSheetModel(); // this will update the form with the character
    });
  }

  async submit(event: Event): Promise<void> {
    const request = this.getFormValueAsCharacterRequest();
    try {
      const characterId = this.getIdFromCharacterSheet();
      // Send a request for the whole character
      await this.characterService.characterIdPut(characterId, request, 'body').toPromise();
      // Send a request for each ability attribute
      await this.sendAttributeUpdateRequests(characterId);
      await this.router.navigate(['character-sheet']);
    } catch (error) {
      const errorResponse = error.error as ErrorResponse;
      this.overallError = errorResponse?.message ?? 'An unexpected error has occurred.';
    }
  }
}
