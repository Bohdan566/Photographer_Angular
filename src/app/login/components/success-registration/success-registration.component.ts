import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-success-registration',
  templateUrl: './success-registration.component.html',
  styleUrls: ['./success-registration.component.css']
})
export class SuccessRegistrationComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
