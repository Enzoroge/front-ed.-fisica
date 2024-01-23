import { Injectable } from "@angular/core";
import { AutorizatioService } from "../services/autorization.service";
import { Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard{

  constructor(
    private service: AutorizatioService,
    private router: Router
  ){

  }

  canActivate():Observable<boolean | UrlTree>
  |Promise<boolean | UrlTree>
  |boolean
  |UrlTree{
    if(!this.service.isLoggedIn()){
      this.router.navigate(['/home']);
      return false;
    }
    this.service.isLoggedIn();
    return true
  }
}
