import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  templateUrl: './events-app.component.html',
  styleUrls: ['./events-app.component.css']
})
export class EventsAppComponent implements OnInit {
  // title = 'ng-fundamentals';
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
