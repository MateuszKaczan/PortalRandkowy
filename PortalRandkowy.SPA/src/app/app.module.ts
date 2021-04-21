import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';

@NgModule({
  declarations: [			
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,  // dodano w celu kominkacji z API
    FormsModule // dodano podczas dodawania logowania w nav
  ],
  providers: [
    AuthService, // tutaj musielismy dodac nasz service
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
