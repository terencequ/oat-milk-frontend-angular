import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCombatBlockComponent } from './character-combat-block.component';

describe('CharacterCombatBlockComponent', () => {
  let component: CharacterCombatBlockComponent;
  let fixture: ComponentFixture<CharacterCombatBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCombatBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCombatBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
