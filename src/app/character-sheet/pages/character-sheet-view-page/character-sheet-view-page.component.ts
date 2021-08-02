import { Component, OnInit } from '@angular/core';
import {BaseCharacterSheetPage} from '../abstract/base-character-sheet-page.component';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService, ErrorResponse} from '../../../api/backend';
import {LevelService} from '../../services/level/level.service';


@Component({
  selector: 'app-character-sheet-page',
  templateUrl: './character-sheet-view-page.component.html',
  styleUrls: ['./character-sheet-view-page.component.scss']
})
export class CharacterSheetViewPageComponent extends BaseCharacterSheetPage implements OnInit {
  constructor(private router: Router, route: ActivatedRoute, characterService: CharacterService, levelService: LevelService) {
    super(route, characterService, levelService);
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      await this.updateCharacterSheet(params.name);
    });
  }

  async delete($event: Event): Promise<void> {
    try {
      await this.characterService.characterIdDelete(this.getIdFromCharacterSheet(), 'body').toPromise();
      await this.router.navigate(['character-sheet']);
    } catch (error) {
      const errorResponse = error.error as ErrorResponse;
      this.overallError = errorResponse?.message ?? 'An unexpected error has occurred.';
    }
  }
}
