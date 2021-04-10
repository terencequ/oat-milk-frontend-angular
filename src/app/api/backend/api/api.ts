export * from './ping.service';
import { PingService } from './ping.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [PingService, UserService];
