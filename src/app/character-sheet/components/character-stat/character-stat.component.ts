import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-stat',
  templateUrl: './character-stat.component.html',
  styleUrls: ['./character-stat.component.scss']
})
export class CharacterStatComponent implements OnInit {

  @Input() statLabel = 'strength';
  @Input() statValue = 20;
  @Input() statProficient = false;
  @Input() statModifier = 5;

  constructor() { }

  ngOnInit(): void {
  }

  getLabel(): string {
    return this.statLabel.toUpperCase();
  }

  getValue(): string {
    return this.statValue.toString();
  }

  getModifier(): string {
    return this.statModifier > 0 ? `+${this.statModifier.toString()}` : this.statModifier.toString();
  }
}
