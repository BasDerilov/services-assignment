import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  toActiveCount = 0;
  toInactiveCount = 0;

  toActiveEmitter = new EventEmitter<number>();
  toInactiveEmitter = new EventEmitter<number>();

  constructor() {}

  moveToActive(userId: number) {
    const user = this.inactiveUsers.splice(userId, 1);
    this.activeUsers.push(user[0]);
    this.toActiveCount++;
    this.toActiveEmitter.emit(this.toActiveCount);
  }

  moveToInactive(userId: number) {
    const user = this.activeUsers.splice(userId, 1);
    this.inactiveUsers.push(user[0]);
    this.toInactiveCount++;
    this.toInactiveEmitter.emit(this.toInactiveCount);
  }
}
