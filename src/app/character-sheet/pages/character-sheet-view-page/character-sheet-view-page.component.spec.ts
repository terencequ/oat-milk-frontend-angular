import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterSheetViewPageComponent} from './character-sheet-view-page.component';
import {CharacterResponse, CharacterService, LevelService} from '../../../api/backend';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CharacterSheetListPageComponent} from '../character-sheet-list-page/character-sheet-list-page.component';

describe('CharacterSheetPageComponent', () => {
  let component: CharacterSheetViewPageComponent;
  let fixture: ComponentFixture<CharacterSheetViewPageComponent>;
  let characterServiceMock: jasmine.SpyObj<CharacterService>;
  let levelServiceMock: jasmine.SpyObj<LevelService>;
  let activatedRouteMock: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    characterServiceMock = jasmine.createSpyObj<CharacterService>('CharacterService', ['characterGet']);
    levelServiceMock = jasmine.createSpyObj<LevelService>('LevelService', ['levelGet']);
    activatedRouteMock = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute', [], {params: of()});

    await TestBed.configureTestingModule({
      declarations: [CharacterSheetViewPageComponent],
      providers: [
        {provide: CharacterService, useValue: characterServiceMock},
        {provide: LevelService, useValue: levelServiceMock},
        {provide: ActivatedRoute, useValue: activatedRouteMock},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
