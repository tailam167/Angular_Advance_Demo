import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../events/shared/index';
import { AuthService } from '../user/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavBarComponent implements OnInit {
  events!: IEvent[];

  constructor(public auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }
}
