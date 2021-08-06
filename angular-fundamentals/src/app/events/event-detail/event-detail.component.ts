import { IEvent, EventService } from '../shared/index';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event?: IEvent;
  addMode?: boolean;

  constructor(
    private eventService: EventService,
    private routes: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.routes.snapshot.params['id']);
  }

  hanldeThumnailClick() {
    this.toastr.success('Event Name is clicked');
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event!.sessions.map((s) => s.id)
    );
    session.id = nextId + 1;
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddMode(){
    this.addMode = false;
  }
}
