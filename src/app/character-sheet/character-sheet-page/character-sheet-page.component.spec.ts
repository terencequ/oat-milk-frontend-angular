import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetPageComponent } from './character-sheet-page.component';
import {CharacterResponse, CharacterService} from '../../api/backend';

describe('CharacterSheetPageComponent', () => {
  let component: CharacterSheetPageComponent;
  let fixture: ComponentFixture<CharacterSheetPageComponent>;
  let mockCharacterService;

  beforeEach(async () => {
    mockCharacterService = jasmine.createSpyObj(['characterNameGet']);
    mockCharacterService.characterNameGet.and.returnValue({
      id: '3f93f1b9-cd3e-403d-ba22-135e0307b20c',
      name: 'Jeff'
    } as CharacterResponse);
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetPageComponent ],
      providers: [ {provide: CharacterService, useValue: mockCharacterService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
