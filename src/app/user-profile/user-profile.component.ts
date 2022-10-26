import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User( 'Messadia', 'Boumedienne', 18, '', 'https://randomuser.me/api/portraits/lego/2.jpg')
  showAge: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}