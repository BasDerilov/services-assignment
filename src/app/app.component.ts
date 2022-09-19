import { Component } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private usersService: UsersService) {
    usersService.toActiveEmitter.subscribe((count) => {
      this.movesToActive = count;
    });

    usersService.toInactiveEmitter.subscribe((count) => {
      this.movesToInactive = count;
    });
  }

  movesToActive = this.usersService.toActiveCount;
  movesToInactive = this.usersService.toInactiveCount;
}
