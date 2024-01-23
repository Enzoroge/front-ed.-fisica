import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Material } from 'src/app/models/material';
// import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';






@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.css']


})


export class MaterialCreateComponent implements OnInit {
  material: Material= {
    nome: '',
    quantidade: 0
  }

  nome = new FormControl('', [Validators.minLength(5)])
  quantidade = new FormControl('', [Validators.minLength(1)])







  constructor(private router : Router,
    private service: MaterialService,
    private message: MessageService,
    ){
  }
    ngOnInit():void{

    }
    cancel():void{
      this.router.navigate(['material'])

    }
    create():void{
      this.service.create(this.material).subscribe((resposta) =>{
        this.router.navigate(['material'])
        this.message.add({
          severity: 'success',
          summary: 'success',
          detail: `Material cadastrado com sucesso!`,
          life: 4000
        })

      })
    }

    errorValidName(){
      if(this.nome.invalid){
        return 'O nome deve ter no mínimo 5 caracteres';

      }
      return false;
    }

    errorValidQuantidade(){
      if(this.quantidade.invalid){
        return 'A quantidade deve ser adcionada '

      }
      return false
    }


  }





