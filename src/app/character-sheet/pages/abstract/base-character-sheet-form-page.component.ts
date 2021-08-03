import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterRequest, CharacterService} from '../../../api/backend';
import {BaseCharacterSheetPage} from './base-character-sheet-page.component';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CharacterSheetFormModel} from '../../models/requests/character-sheet-form-model';
import {getAbilityNames, getSkillNames} from '../../helpers/character-sheet-type.helper';
import {CharacterSheetStatsAbilitiesModel} from '../../models/responses/character-sheet-stats-abilities-model';
import {CharacterSheetStatsSkillsModel} from '../../models/responses/character-sheet-stats-skills-model';
import {SubmittableFormInterface} from '../../../shared/abstract/submittable-form.interface';
import {LevelService} from '../../services/level/level.service';

type CharacterSheetControls = { [key in keyof CharacterSheetFormModel]: AbstractControl };
type CharacterSheetFormGroup = FormGroup & { value: CharacterSheetFormModel, controls: CharacterSheetControls };

@Injectable()
export abstract class BaseCharacterSheetFormPage extends BaseCharacterSheetPage {
  characterSheetForm: FormGroup;
  protected constructor(protected formBuilder: FormBuilder,
                        route: ActivatedRoute,
                        characterService: CharacterService,
                        levelService: LevelService) {
    super(route, characterService, levelService);
    // Set up form
    this.characterSheetForm = this.formBuilder.group({
      name: ['Placeholder Name', [Validators.required]],
      experience: [0, [Validators.required]],
      strength: [10, [Validators.required]],
      dexterity: [10, [Validators.required]],
      constitution: [10, [Validators.required]],
      intelligence: [10, [Validators.required]],
      wisdom: [10, [Validators.required]],
      charisma: [10, [Validators.required]],
      armorClass: [12, [Validators.required]],
      initiative: [0, [Validators.required]], // This should be auto-calculated
      speedInFt: [30, [Validators.required]],
      currentHitPoints: [10, [Validators.required]],
      maxHitPoints: [10, [Validators.required]],
      deathSaveSuccesses: [0, [Validators.required]],
      deathSaveFailures: [0, [Validators.required]],
      acrobatics: [false, [Validators.required]],
      animalHandling: [false, [Validators.required]],
      arcana: [false, [Validators.required]],
      athletics: [false, [Validators.required]],
      deception: [false, [Validators.required]],
      history: [false, [Validators.required]],
      insight: [false, [Validators.required]],
      intimidation: [false, [Validators.required]],
      investigation: [false, [Validators.required]],
      medicine: [false, [Validators.required]],
      nature: [false, [Validators.required]],
      perception: [false, [Validators.required]],
      performance: [false, [Validators.required]],
      persuasion: [false, [Validators.required]],
      religion: [false, [Validators.required]],
      sleightOfHand: [false, [Validators.required]],
      stealth: [false, [Validators.required]],
      survival: [false, [Validators.required]],
    });
  }

  /**
   * This will update the form with information that is part of the characterSheetModel.
   * If characterSheetModel is null, this will clear the form.
   */
  updateFormWithCharacterSheetModel(): void {
    const formControls = this.characterSheetForm.controls;
    const characterSheetModel = this.characterSheetModel;
    console.log(formControls);
    console.log(characterSheetModel);

    if (characterSheetModel) {
      formControls.name.setValue(characterSheetModel?.name ?? 'Placeholder Name');
      formControls.experience.setValue(characterSheetModel?.experience ?? 0);
      for (const ability of getAbilityNames()) {
        if (characterSheetModel) {
          formControls[ability].setValue(characterSheetModel[ability as keyof CharacterSheetStatsAbilitiesModel]);
        } else {
          formControls[ability].setValue(10);
        }
      }
      for (const skill of getSkillNames()) {
        if (characterSheetModel) {
          formControls[skill].setValue(characterSheetModel[skill as keyof CharacterSheetStatsSkillsModel]);
        } else {
          formControls[skill].setValue(false);
        }
      }
    }
  }

  /**
   * Map a CharacterFormModel to a CharacterRequest.
   */
  getFormValueAsCharacterRequest(): CharacterRequest{
    const formValue = this.characterSheetForm.value as CharacterSheetFormModel;
    const request = {
      name: formValue.name,
      experience: formValue.experience,
      strength: formValue.strength,
      dexterity: formValue.dexterity,
      constitution: formValue.constitution,
      intelligence: formValue.intelligence,
      wisdom: formValue.wisdom,
      charisma: formValue.charisma,
      armorClass: formValue.armorClass,
      initiative: formValue.initiative,
      speedInFt: formValue.speedInFt,
      currentHitPoints: formValue.currentHitPoints,
      maxHitPoints: formValue.maxHitPoints,
      deathSaveSuccesses: formValue.deathSaveSuccesses,
      deathSaveFailures: formValue.deathSaveFailures,
      acrobatics: formValue.acrobatics,
      animalHandling: formValue.animalHandling,
      arcana: formValue.arcana,
      athletics: formValue.athletics,
      deception: formValue.deception,
      history: formValue.history,
      insight: formValue.insight,
      intimidation: formValue.intimidation,
      investigation: formValue.investigation,
      medicine: formValue.medicine,
      nature: formValue.nature,
      perception: formValue.perception,
      performance: formValue.performance,
      persuasion: formValue.persuasion,
      religion: formValue.religion,
      sleightOfHand: formValue.sleightOfHand,
      stealth: formValue.stealth,
      survival: formValue.survival,
      personalityTraits: null,
      ideals: null,
      bonds: null,
      flaws: null,
      backstory: null,
      alliesAndOrganisations: null,
      appearance: null,
    } as CharacterRequest;
    return request;
  }

  getAbilityNames(): Array<keyof CharacterSheetStatsAbilitiesModel>{
    return getAbilityNames();
  }

  getSkillNames(): Array<keyof CharacterSheetStatsSkillsModel>{
    return getSkillNames();
  }

  getFormDisplayName(name: string): string{
    const result = name.replace( /([A-Z])/g, ' $1' );
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}
