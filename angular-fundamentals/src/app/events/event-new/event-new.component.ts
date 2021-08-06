import { EventService } from '../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css'],
})
export class EventNewComponent implements OnInit {
  isDirty: boolean = true;
  event: any;
  constructor(private route: Router, private eventService: EventService) {}

  ngOnInit() {
    this.event = {
      name: 'Angular Demo Two Way Binding',
      date: new Date('6/29/2021'),
      time: '5:00 pm',
      price: 167.97,
      location: {
        address: 'April 30th St.',
        city: 'Bien Hoa',
        country: 'Viet Nam',
      },
      onlineURL: 'www.angular.io',
      imageUrl: './assets/images/tailam_logo.png',
    };
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.route.navigate(['/events']);
  }

  cancel() {
    this.route.navigate(['/events']);
  }
}
