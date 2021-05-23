export interface CharacterSheetLevelModel {
  level: number;
  previousLevelExperienceRequirement: number | null;
  currentLevelExperienceRequirement: number | null;
  nextLevelExperienceRequirement: number | null;
  experience: number;
}
