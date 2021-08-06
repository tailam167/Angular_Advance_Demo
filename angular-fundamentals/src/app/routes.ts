import {
  EventsListComponent,
  EventDetailComponent,
  EventNewComponent,
  EventRouteActivator,
  EventListResolver,
  EventSessionComponent,
} from './events/index';
import { PageNotFoundComponent } from './error/page-not-found.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: EventNewComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivator],
  },
  { path: 'events/session/new', component: EventSessionComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
