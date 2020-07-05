
import { Component, OnInit} from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession, IEvent } from '../shared/event.model';

@Component({

  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

    event: any;
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // this.route.params.forEach((params: Params) =>{
        this.route.data.forEach((data) => {
          this.event = data['event'];
            this.addMode = false;
        });
        // this.event = this.eventService.getEvent(
        //     +this.route.snapshot.params['id']);
    }

    addSession() {
      this.addMode = true;
    }

    saveNewSession(session: ISession) {
     const nextId = Math.max.apply(null, this.event.sessions.map(s =>
      s.id));
      session.id = nextId + 1;
      this.event.sessions.push(session);
      // this.eventService.updateEvent(this.event)
      this.eventService.saveEvent(this.event).subscribe();
      this.addMode = false;
    }


    cancelAddSession() {
      this.addMode = false;
    }
}
