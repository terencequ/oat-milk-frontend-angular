export * from './character.service';
import { CharacterService } from './character.service';
export * from './ping.service';
import { PingService } from './ping.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [CharacterService, PingService, UserService];
