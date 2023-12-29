import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) {

  }

  ngOnInit() {
    this.userService.logOut();
    this.router.navigate(['/home'])
  }

}
