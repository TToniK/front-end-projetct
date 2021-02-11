import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
                  public afs: AngularFirestore,   // Inject Firestore service
                  public afAuth: AngularFireAuth, // Inject Firebase auth service
                  public router: Router) { }


  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
          this.router.navigate(['dashboard']);
          // this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  private SetUserData(user: string | number) {

  }
}
