import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetListPageComponent } from './character-sheet-list-page.component';

describe('CharacterSheetListPageComponent', () => {
  let component: CharacterSheetListPageComponent;
  let fixture: ComponentFixture<CharacterSheetListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
