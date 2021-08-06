import { EventService } from './shared/index';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.getEvent(+route.params['id'])
        if (!eventExist) {
            this.route.navigate(['/404'])
        }
        return eventExist;
    }
}
