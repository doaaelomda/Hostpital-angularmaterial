import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth,private router:Router) { }
  login(username:string,password:string){
    this.auth.signInWithEmailAndPassword(username,password).then(res=>{
      this.auth.authState.subscribe(async user=>{
        if(user){
          localStorage.setItem('user',JSON.stringify( user))
         await this.router.navigate(['/dashboard'])
          location.reload()
          // alert(user +'is loginning done ')
        }
      })
    }).catch(error=>{
      alert(error)
    })
  }
  async logout(){
    localStorage.setItem('user','null')
    await this.router.navigate([''])
    location.reload()
  }
  isUserLoggedIn(){
    const user =JSON.parse(localStorage.getItem('user')!)
    return user !== null ? true:false
  }
}
