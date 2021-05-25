import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterSheetPageComponent} from './character-sheet-page.component';
import {CharacterResponse, CharacterService} from '../../api/backend';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CharacterSheetListPageComponent} from '../character-sheet-list-page/character-sheet-list-page.component';

describe('CharacterSheetPageComponent', () => {
  let component: CharacterSheetPageComponent;
  let fixture: ComponentFixture<CharacterSheetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterSheetPageComponent]
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
