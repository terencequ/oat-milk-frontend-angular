import { Injectable } from '@angular/core';

interface LevelModel {
  number: number;
  experienceRequirement: number;
}

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private readonly levels: LevelModel[] = [
    { number: 1, experienceRequirement: 0 },
    { number: 2, experienceRequirement: 300 },
    { number: 3, experienceRequirement: 900 },
    { number: 4, experienceRequirement: 2700 },
    { number: 5, experienceRequirement: 6500 },
    { number: 6, experienceRequirement: 14000 },
    { number: 7, experienceRequirement: 23000 },
    { number: 8, experienceRequirement: 34000 },
    { number: 9, experienceRequirement: 48000 },
    { number: 10, experienceRequirement: 64000 },
    { number: 11, experienceRequirement: 85000 },
    { number: 12, experienceRequirement: 100000 },
    { number: 13, experienceRequirement: 120000 },
    { number: 14, experienceRequirement: 140000 },
    { number: 15, experienceRequirement: 165000 },
    { number: 16, experienceRequirement: 195000 },
    { number: 17, experienceRequirement: 225000 },
    { number: 18, experienceRequirement: 265000 },
    { number: 19, experienceRequirement: 305000 },
    { number: 20, experienceRequirement: 355000 },
  ];

  constructor() { }

  getLevels(): LevelModel[]{
    return this.levels;
  }
}
