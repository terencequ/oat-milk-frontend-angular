import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheetStatsSkillsModel} from '../../models/responses/character-sheet-stats-skills-model';
import {CharacterSheetStatModel} from '../../models/responses/character-sheet-stat-model';
import {CharacterSheetProficiencyModel} from '../../models/responses/character-sheet-proficiency-model';

@Component({
  selector: 'app-character-stat',
  templateUrl: './character-stat.component.html',
  styleUrls: ['./character-stat.component.scss']
})
export class CharacterStatComponent implements OnInit {

  @Input() stat: CharacterSheetStatModel | null = null;
  @Input() statProficiencies: CharacterSheetProficiencyModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getStatLabel(): string {
    return this.stat?.label.toUpperCase() ?? '';
  }

  getStatValue(): string {
    return this.stat?.value.toString() ?? '';
  }

  getStatProficient(): boolean {
    return this.stat?.proficient ?? false;
  }

  getStatModifier(): string {
    const modifier = this.stat?.modifier ?? 0;
    return `${modifier > 0 ? '+' : ''}${modifier}`;
  }

  getProficiencyLabel(proficiency: CharacterSheetProficiencyModel): string {
    // Change from camelcase to sentence case
    const text = proficiency.label;
    const result = text.replace( /([A-Z])/g, ' $1' );
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult ?? '';
  }

  getProficiencyProficient(proficiency: CharacterSheetProficiencyModel): boolean {
    return proficiency.proficient ?? false;
  }

  getProficiencyModifier(proficiency: CharacterSheetProficiencyModel): string {
    const modifier = proficiency.modifier ?? 0;
    return `${modifier > 0 ? '+' : ''}${modifier}`;
  }
}
