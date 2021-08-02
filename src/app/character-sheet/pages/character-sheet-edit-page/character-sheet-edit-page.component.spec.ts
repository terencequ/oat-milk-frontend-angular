import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetEditPageComponent } from './character-sheet-edit-page.component';

describe('CharacterSheetEditPageComponent', () => {
  let component: CharacterSheetEditPageComponent;
  let fixture: ComponentFixture<CharacterSheetEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
