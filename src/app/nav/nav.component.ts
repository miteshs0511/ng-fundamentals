import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/events.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];
 constructor(public authService: AuthService,
  private eventService: EventService) {

 }

 searchSessions(searchTerm) {
  this.eventService.searchSessions(searchTerm).subscribe(sessions => {
    this.foundSessions = sessions;
    // console.log(this.foundSessions);
  });
 }
}
