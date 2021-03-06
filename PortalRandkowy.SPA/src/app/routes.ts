import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'uzytkownicy', component: UserListComponent, canActivate: [AuthGuard]},
    {path: 'polubienia', component: LikesComponent, canActivate: [AuthGuard]},
    {path: 'wiadmosci', component: MessagesComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];


