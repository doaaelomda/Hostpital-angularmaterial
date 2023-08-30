
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';

export class AuthguardGuard implements CanActivate {
  constructor( private authApi : AuthService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authApi.isUserLoggedIn();
  }
}