import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next=>{ // zwaraca observable musi byc zawsze subskrybowany
      this.alertify.success('Zalogowales sie do aplikacji');
    }, error => {
      this.alertify.success('wystapil blad logowania');
    }, () => {
      this.router.navigate(['/uzytkownicy']);
    }); 
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('zostałeś wylogowany');
    this.router.navigate(['/home']);
  }
}
