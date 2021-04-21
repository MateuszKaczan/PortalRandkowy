import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();  // do komponentu nadrzednego
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { } // wstrzykujemy wszystkie service

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('rejestracja udana')
    }, error => {
      this.alertify.error('wystapił błąd rejestracji');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
