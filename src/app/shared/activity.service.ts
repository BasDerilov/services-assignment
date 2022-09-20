import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  activeToInactive = 0;
  inactiveToActive = 0;

  activeEmitter = new EventEmitter<number>();
  inactiveEmitter = new EventEmitter<number>();

  constructor() {}

  incrementInactive() {
    this.activeToInactive++;
    this.inactiveEmitter.emit(this.activeToInactive);
  }

  incrementActive() {
    this.inactiveToActive++;
    this.activeEmitter.emit(this.inactiveToActive);
  }
}
