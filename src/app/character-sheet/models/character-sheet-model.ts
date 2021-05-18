export interface CharacterSheetModel {
  id: string;
  name: string;
  experience: number;

  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  acrobatics: boolean;
  animalHandling: boolean;
  arcana: boolean;
  athletics: boolean;
  deception: boolean;
  history: boolean;
  insight: boolean;
  intimidation: boolean;
  investigation: boolean;
  medicine: boolean;
  nature: boolean;
  perception: boolean;
  performance: boolean;
  religion: boolean;
  sleightOfHand: boolean;
  stealth: boolean;
  survival: boolean;
}
