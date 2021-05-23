import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterExperienceBarComponent } from './character-experience-bar.component';

describe('ExperienceBarComponent', () => {
  let component: CharacterExperienceBarComponent;
  let fixture: ComponentFixture<CharacterExperienceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterExperienceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterExperienceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
