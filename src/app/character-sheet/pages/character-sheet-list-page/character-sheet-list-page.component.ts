import {Component, OnInit} from '@angular/core';
import {CharacterSheetListModel} from '../../models/responses/character-sheet-list-model';
import {CharacterResponse, CharacterResponsePageResponse, CharacterService, ErrorResponse} from '../../../api/backend';

@Component({
  selector: 'app-character-sheet-list-page',
  templateUrl: './character-sheet-list-page.component.html',
  styleUrls: ['./character-sheet-list-page.component.scss']
})
export class CharacterSheetListPageComponent implements OnInit {

  characterSheets: CharacterSheetListModel[] = [] as CharacterSheetListModel[];

  constructor(private characterService: CharacterService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      const result: CharacterResponsePageResponse = await this.characterService.characterGet().toPromise();
      this.characterSheets = result.items?.map( (element: CharacterResponse) => {
        return {
          id: element.id,
          name: element.name,
          experience: element.experience
        } as CharacterSheetListModel;
      }) ?? [];
    } catch (error) {
      const errorResponse = error.error as ErrorResponse;
      console.warn(errorResponse?.message ?? 'An unexpected error has occurred.');
    }
  }

}
