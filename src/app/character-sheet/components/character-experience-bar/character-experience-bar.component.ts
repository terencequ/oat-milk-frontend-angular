import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheetModel} from '../../models/character-sheet-model';

@Component({
  selector: 'app-character-experience-bar',
  templateUrl: './character-experience-bar.component.html',
  styleUrls: ['./character-experience-bar.component.scss']
})
export class CharacterExperienceBarComponent implements OnInit {

  @Input() characterSheetModel: CharacterSheetModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  getBarMax(): number {
    if (this.characterSheetModel?.nextLevelExperienceRequirement == null) {
      return 0; // Make sure the bar is full
    }

    const experienceFloor = this.characterSheetModel?.currentLevelExperienceRequirement ?? 0;
    const experienceCeiling = this.characterSheetModel?.nextLevelExperienceRequirement ?? 0;

    return (experienceCeiling - experienceFloor);
  }

  getBarCurrent(): number {
    const experience = this.characterSheetModel?.experience ?? 0;
    const experienceFloor = this.characterSheetModel?.currentLevelExperienceRequirement ?? 0;

    return (experience - experienceFloor);
  }

  getLevelDisplayText(): string {
    if (this.characterSheetModel?.nextLevelExperienceRequirement == null){
      return `MAX`;
    } else {
      return this.characterSheetModel.level.toString();
    }
  }

  getExperienceDisplayText(): string {
    const experience = this.characterSheetModel?.experience ?? 0;
    const experienceFloor = this.characterSheetModel?.currentLevelExperienceRequirement ?? 0;
    const experienceCeiling = this.characterSheetModel?.nextLevelExperienceRequirement ?? 0;
    if (this.characterSheetModel?.nextLevelExperienceRequirement == null){
      return `${experience}/${experienceFloor}`;
    } else {
      return `${experience}/${experienceCeiling}`;
    }
  }
}
