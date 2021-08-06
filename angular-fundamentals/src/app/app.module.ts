import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import{
  EventsListComponent,
  EventDetailComponent,
  EventThumbnailComponent,
  EventService,
  EventNewComponent,
  EventRouteActivator,
  EventListResolver,
  EventSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'
import { appRoutes } from './routes';
import { ToastrService } from './common/toastr.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    EventNewComponent,
    PageNotFoundComponent,
    EventSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:EventNewComponent) {
  if (component.isDirty){
    return window.confirm('You have not save this event. Do you really want to cancel ?')
  }
  return true;
}
