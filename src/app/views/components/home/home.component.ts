import { AuhtResponse } from './../../../models/authResponse';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { AuthRequest } from 'src/app/models/authRequest';
import { Autorization } from 'src/app/models/autorization';
import { Usuario } from 'src/app/models/usuario';
import { AutorizatioService } from 'src/app/services/autorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  isLoggedIn: boolean = false

  loginCard = true;



  loginForm= this.formBuild.group({
    email:['', Validators.required],
    senha:['', Validators.required]

  })

  signiupForm= this.formBuild.group({
    nome: ['', Validators.required],
    email:  ['', Validators.required],
    matricula:  ['', Validators.required],
    senha: ['', Validators.required]
  })


  constructor(private formBuild: FormBuilder,
    private serivce: AutorizatioService,
    private cookieService: CookieService,
    private message: MessageService,
    private router: Router
    ){
      this.isLoggedIn = this.serivce.isLoggedIn();
  }


  onSubimitLoginForm():void{

    if(this.loginForm.value && this.loginForm.valid)
    this.serivce.authUser(this.loginForm.value as AuthRequest).subscribe({
      next: (response) =>{
        console.log('Response do serviço:', response);
        if(response){

          this.cookieService.set('USER_INFO', response?.token);
            this.loginForm.reset()
            this.isLoggedIn=true

            this.router.navigate(['usuario'])








          this.message.add({
            severity: 'success',
            summary: 'success',
            detail: `Bem vindo  ${response.nome}!`,
            life: 4000
          })

        }


      },
      error: (err)=>{
        this.message.add({
          severity: 'error',
            summary: 'error',
            detail: 'Usuario ou senha incorreto',
            life: 4000
        })
        console.log(err)
      }
    })
  }

  onsigniupForm():void{
    this.serivce.registrarUsuario(this.signiupForm.value as Autorization).subscribe({
      next: (response)=> {

        this.signiupForm.reset()
        this.loginForm.reset()
        this.loginCard=true
        this.message.add({
          severity: 'success',
          summary: 'success',
          detail: 'Usuário(a) Cadastrado com sucesso!',
          life: 4000
        })
      },
      error : (err)=> {
        this.message.add({
          severity: 'error',
          summary: 'error',
          detail: 'Erro ao criar usuário!',
          life: 4000
        })
        console.log(err)
      }
    })

  }


}
