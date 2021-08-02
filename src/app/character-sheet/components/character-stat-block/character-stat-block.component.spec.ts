import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStatBlockComponent } from './character-stat-block.component';

describe('CharacterStatBlockComponent', () => {
  let component: CharacterStatBlockComponent;
  let fixture: ComponentFixture<CharacterStatBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterStatBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStatBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
