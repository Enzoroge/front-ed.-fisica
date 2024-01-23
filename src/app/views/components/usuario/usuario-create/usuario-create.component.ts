import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent {
  usuario: Usuario= {
    id: 0,
    nome: '',
    email:'',
    matricula: 0,

  }

  nome = new FormControl('', [Validators.minLength(5)])
  email = new FormControl('', [Validators.minLength(1)])
  matricula = new FormControl('', [Validators.minLength(1)])
  senha = new FormControl('', [Validators.minLength(6)])







  constructor(private router : Router,
    private service: UsuarioService){
  }
    ngOnInit():void{

    }
    cancel():void{
      this.router.navigate(['usuario'])

    }
    create():void{
      this.service.create(this.usuario).subscribe((resposta) =>{
        this.router.navigate(['usuario'])
        this.service.message('Usuario Cadastrado com Sucesso!')

      })
    }

    // errorValidName(){
    //   if(this.nome.invalid){
    //     return 'O nome deve ter no mínimo 5 caracteres';

    //   }
    //   return false;
    // }

    // errorValidQuantidade(){
    //   if(this.email.invalid){
    //     return 'A quantidade deve ser adcionada '

    //   }
    //   return false
    // }


  }








