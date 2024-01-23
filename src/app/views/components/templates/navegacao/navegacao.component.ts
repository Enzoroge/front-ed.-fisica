import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { AutorizatioService } from 'src/app/services/autorization.service';


@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent {

isLoggedIn: boolean







  constructor(private cookie: CookieService,
    private router: Router,
    private service: AutorizatioService,
    private message: MessageService
  ){
    this.isLoggedIn=this.service.isLoggedIn()
  }






    logout():void{
      this.cookie.delete('USER_INFO')
      void this.router.navigate([''])
    }







}
