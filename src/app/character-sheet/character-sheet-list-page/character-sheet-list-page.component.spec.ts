import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterSheetListPageComponent} from './character-sheet-list-page.component';
import {CharacterService} from '../../api/backend';

describe('CharacterSheetListPageComponent', () => {
  let component: CharacterSheetListPageComponent;
  let fixture: ComponentFixture<CharacterSheetListPageComponent>;
  let characterServiceMock: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {
    characterServiceMock = jasmine.createSpyObj<CharacterService>('CharacterService', ['characterGet']);
    await TestBed.configureTestingModule({
      declarations: [CharacterSheetListPageComponent],
      providers: [
        {provide: CharacterService, useValue: characterServiceMock}
      ]
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
