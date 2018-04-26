import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: any;
  subscription: Subscription;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.getUser().subscribe(user => { this.user = user; console.log(user); });
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
