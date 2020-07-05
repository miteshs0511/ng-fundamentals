import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/events.service';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent {
    isDirty = true;
    newEvent;

    constructor(private router: Router, private eventService: EventService) {

    }
    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
        // console.log(formValues);
    }
}


