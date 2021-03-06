import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
 constructor(public afAuth:AngularFireAuth , private router:Router){
  
 }

//  doGoogleLogin(){
//     return new Promise<any>((resolve, reject) => {
//       let provider = new firebase.auth.GoogleAuthProvider();
//       provider.addScope('profile');
//       provider.addScope('email');
//       this.afAuth.auth
//       .signInWithPopup(provider)
//       .then(res => {
//         resolve(res);
//       })
//     })
//   }
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  logout() {
    this.afAuth.auth.signOut().then(res => {
      localStorage.clear();
      // window.location.assign('https://accounts.google.com/Logout');
      this.router.navigate(['logOut']);
    }, err => {
      console.log(err);
    });
  }
  // doRegister(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //   })
  // }
}
