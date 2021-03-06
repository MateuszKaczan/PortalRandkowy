import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [		
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    UserListComponent,
      LikesComponent,
      MessagesComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,  // dodano w celu kominkacji z API
    FormsModule, // dodano podczas dodawania logowania w nav
    JwtModule.forRoot({
      config: {
         tokenGetter: tokenGetter,
         allowedDomains: ['localhost:5000'],
         disallowedRoutes: ['localhost:5000/api/auth']
      }
   }),
   RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService, // tutaj musielismy dodac nasz service
    AlertifyService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
