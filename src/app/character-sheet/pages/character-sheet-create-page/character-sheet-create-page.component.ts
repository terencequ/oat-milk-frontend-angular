import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterRequest, CharacterService, ErrorResponse} from '../../../api/backend';
import {BaseCharacterSheetFormPage} from '../abstract/base-character-sheet-form-page.component';
import {FormBuilder} from '@angular/forms';
import {getAbilityNames, getSkillNames} from '../../helpers/character-sheet-type.helper';
import {SubmittableFormInterface} from '../../../shared/abstract/submittable-form.interface';
import {CharacterSheetFormModel} from '../../models/requests/character-sheet-form-model';
import {LevelService} from '../../services/level/level.service';

/**
 * This page is used for editing and creating character sheets.
 */
@Component({
  selector: 'app-character-sheet-edit-page',
  templateUrl: './character-sheet-create-page.component.html',
  styleUrls: ['./character-sheet-create-page.component.scss']
})
export class CharacterSheetCreatePageComponent extends BaseCharacterSheetFormPage implements SubmittableFormInterface, OnInit {

  constructor(private router: Router,
              formBuilder: FormBuilder,
              route: ActivatedRoute,
              characterService: CharacterService,
              levelService: LevelService) {
    super(formBuilder, route, characterService, levelService);
  }

  ngOnInit(): void {
    this.updateFormWithCharacterSheetModel(); // this will clear the form
  }

  async submit(event: Event): Promise<void> {
    const request = this.getFormValueAsCharacterRequest();
    try {
      // Send a request for the whole character
      const result = await this.characterService.characterPost(request, 'body').toPromise();
      await this.router.navigate(['character-sheet']);
    } catch (error) {
      const errorResponse = error.error as ErrorResponse;
      this.overallError = errorResponse?.message ?? 'An unexpected error has occurred.';
    }
  }
}
