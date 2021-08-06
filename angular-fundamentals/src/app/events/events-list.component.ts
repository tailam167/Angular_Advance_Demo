import { IEvent } from './shared/index';
import { ToastrService } from './../common/toastr.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(private toastr: ToastrService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  hanldeThumnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
