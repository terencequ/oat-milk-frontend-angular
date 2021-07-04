import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetCreatePageComponent } from './character-sheet-create-page.component';

describe('CharacterSheetEditPageComponent', () => {
  let component: CharacterSheetCreatePageComponent;
  let fixture: ComponentFixture<CharacterSheetCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
