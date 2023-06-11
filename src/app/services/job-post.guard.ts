import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JobPostGuard implements CanActivate {

  roles!:string;

  constructor(private tokenStorageService:TokenStorageService){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.roles = this.tokenStorageService.getRoles();

    if (this.roles === "ADMIN") {
      return true;
    }
    console.log("Job details Guard : Admin role required ! your current role is -->", this.roles)
    alert("Please login with admin role.");
    return false;
  }

}
