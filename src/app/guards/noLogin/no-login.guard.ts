import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase';
import { isNullOrUndefined } from 'util';

import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(private AFauth: AngularFireAuth, public route: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AFauth.authState.pipe(map(auth => {
      if(isNullOrUndefined(auth)){
        return true;
      }
      else{
        //si estas logeado no puedes regresar al login
        this.route.navigate(['/home'])
        return false;
      }
    }))
  }
  
}
