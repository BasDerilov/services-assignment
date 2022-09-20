import { Injectable, EventEmitter } from '@angular/core';
import { ActivityService } from './activity.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private activity: ActivityService) {}

  moveToActive(userId: number) {
    const user = this.inactiveUsers.splice(userId, 1);
    this.activeUsers.push(user[0]);
    this.activity.incrementActive();
  }

  moveToInactive(userId: number) {
    const user = this.activeUsers.splice(userId, 1);
    this.inactiveUsers.push(user[0]);
    this.activity.incrementInactive();
  }
}
