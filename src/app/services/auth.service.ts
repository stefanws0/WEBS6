import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class AuthService {
  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
  private db: AngularFireDatabase, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }
}
