import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  // user: User;
  user = {id: 0, login: null, email: null, firstname: null, lastname: null, password: null, age: 0};

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value.id);
      this.user.id = value.id;
    });
  }

  ngOnInit(): void {
    this.usersService.findUser(this.user.id).subscribe((value) => {
      this.user = value;
    });
  }

}
