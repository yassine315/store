import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';
import {LoginFormService} from '../../service/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private keycloak:KeycloakService, private http: HttpClient, private login:LoginFormService) { }

  ngOnInit(): void {
  }

}
