import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStatEditComponent } from './character-stat-edit.component';

describe('CharacterStatEditComponent', () => {
  let component: CharacterStatEditComponent;
  let fixture: ComponentFixture<CharacterStatEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterStatEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
