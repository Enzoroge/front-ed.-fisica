import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/models/material';
import { Requisicao } from 'src/app/models/requisicao';
import { Usuario } from 'src/app/models/usuario';
import { MaterialService } from 'src/app/services/material.service';
import { RequisicaoServiceService } from 'src/app/services/requisicao-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-requisicao-update',
  templateUrl: './requisicao-update.component.html',
  styleUrls: ['./requisicao-update.component.css']
})
export class RequisicaoUpdateComponent implements OnInit {


  id_material=''
  id_requisicao=''

  requisicao: Requisicao = {
    id:0,
    nome:'',
    quantidade:0,
    usuario: '',
    material:'',
  };


     material: Material={
       id:0,
       nome: '',
       quantidade:''
     }



  constructor(
    private materialService: MaterialService,
    private usuarioService: UsuarioService,
    private service: RequisicaoServiceService,
    private router : ActivatedRoute,
    private route: Router
  ){}

  ngOnInit(){
    this.id_requisicao=this.router.snapshot.paramMap.get('id')!
    // this.id_material=this.router.snapshot.paramMap.get('id')!
    this.findById()
    // this.findByIdMaterial()
    console.log('resultado', this.findById())


  }


  update():void{

    this.service.update(this.requisicao).subscribe(resposta => {
      this.requisicao=resposta
      this.route.navigate(['requisicao'])

      this.findById()
    })
  }

  findById():void{
    this.service.findById(this.id_requisicao).subscribe(resposta => {
      this.requisicao=resposta

      console.log("Atulizaco", this.id_requisicao)



    })

  }

   findByIdMaterial():void{
     this.materialService.findById(this.id_material).subscribe(resposta =>{
       this.material.nome=resposta.nome
     })
   }

  cancel(){
    this.route.navigate(['requisicao'])
  }


}
