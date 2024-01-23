import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/models/material';
import { Requisicao } from 'src/app/models/requisicao';
import { Usuario } from 'src/app/models/usuario';
import { MaterialService } from 'src/app/services/material.service';
import { RequisicaoServiceService } from 'src/app/services/requisicao-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-requisicao-create',
  templateUrl: './requisicao-create.component.html',
  styleUrls: ['./requisicao-create.component.css']
})
export class RequisicaoCreateComponent {

  material1: Material={
    id: 0,
    nome: '',
    quantidade: 0
  }

  usuario: Usuario[]=[]


  requisicao: Requisicao = {
    id: 0,
    nome: '',
    quantidade: 0,
    usuario: '',
      material:''

  };


  material: Material[]=[]




  constructor(
    private service : RequisicaoServiceService,
    private usuarioService: UsuarioService,
    private materialService:  MaterialService,
    private router: Router
  ){}

  ngOnInit(){
    this.listarMaterial()
    this.listarUsuario()
  }



  create():void{
if(this.requisicao.quantidade > this.material1.quantidade){
  this.service.message("Quantidade solicitada indisponível")
}
    this.service.create(this.requisicao).subscribe(resposta =>{
      this.requisicao = resposta
      this.router.navigate(['requisicao'])
      this.service.message("Requisicao efetuada")

    })

    }

    cancel():void{
      this.router.navigate(['requisicao'])
    }

    listarUsuario(){
      this.usuarioService.findAll().subscribe(resposta =>{
        this.usuario=resposta
      })
    }

    listarMaterial(){
      this.materialService.findAll().subscribe(resposta =>{
        this.material = resposta
      })
    }

  }


