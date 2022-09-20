import { ActivityService } from './shared/activity.service';
import { Component } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private usersService: UsersService,
    private activityService: ActivityService
  ) {
    activityService.activeEmitter.subscribe((count) => {
      this.movesToActive = count;
    });

    activityService.inactiveEmitter.subscribe((count) => {
      this.movesToInactive = count;
    });
  }

  movesToActive = this.activityService.inactiveToActive;
  movesToInactive = this.activityService.activeToInactive;
}
