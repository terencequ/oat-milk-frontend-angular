import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-character-stat-edit',
  templateUrl: './character-stat-edit.component.html',
  styleUrls: ['./character-stat-edit.component.scss']
})
export class CharacterStatEditComponent<T> implements OnInit {

  @Output() newValueEvent = new EventEmitter<T>();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: T): void{
    this.newValueEvent.emit(value);
  }
}
