import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { userRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        {
            provide: 'canDeactivateEditProfile',
            useValue: checkSavedStatus
        }
    ]
})

export class UserModule { }

export function checkSavedStatus(component: ProfileComponent) {
    if (component.isSaved) {
        return window.confirm('You have not save your change in yor profile. Do you really want to cancel ?')
    }
    return true;
}
