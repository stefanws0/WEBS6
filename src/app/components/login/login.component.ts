import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  hardCodedUser: any = {
    username: 'admin',
    password: 'password'
  };
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    localStorage.removeItem('currentUser');
  }
  login() {
    if (this.password === this.hardCodedUser.password && this.username === this.hardCodedUser.username) {
      localStorage.setItem('currentUser', JSON.stringify(this.hardCodedUser));
      this.router.navigate(['']);
    } else {
      alert('Invalid credentials');
    }
  }
}
