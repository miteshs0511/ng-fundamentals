import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
// import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';
// declare let toastr

@Component({
  // selector: 'events-list',
  templateUrl: './events-list.component.html',
//   styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventsService: EventService,
    // private toastrService: ToastrService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];

    // this.events = this.eventsService.getEvents();

    // this.eventsService.getEvents().subscribe(
    //   events => {
    //     this.events = events
    //   }
    // )
  }

    // eventClickHandle(data){
    //   console.log("received data from child")
    // }

    // handleThumbnailClick(eventName){
    //   this.toastrService.success(eventName);
    // }

}
