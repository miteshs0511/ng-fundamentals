import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav.component';
import { EventService } from './events/shared/events.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventsDetailComponent } from './events/event-details/events-detail.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutes } from './route';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404error.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModalTriggerDirective } from './common/modal-trigger.component';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import { EventResolver } from './events/event.resolver.service';

// declare let toastr:Toastr;
const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventsDetailComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    HttpClientModule
  ],
  providers: [
    EventService,
    // ToastrService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    EventResolver,
    VoterService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
