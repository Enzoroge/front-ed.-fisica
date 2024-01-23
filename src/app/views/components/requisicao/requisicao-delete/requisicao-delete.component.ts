import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Material } from 'src/app/models/material';
import { Requisicao } from 'src/app/models/requisicao';
import { MaterialService } from 'src/app/services/material.service';
import { RequisicaoServiceService } from 'src/app/services/requisicao-service.service';

@Component({
  selector: 'app-requisicao-delete',
  templateUrl: './requisicao-delete.component.html',
  styleUrls: ['./requisicao-delete.component.css']
})
export class RequisicaoDeleteComponent implements OnInit {

  id_material=''
  id_requisicao=''

  material: Material={
    id: 0 ,
    nome:'',
    quantidade: 0,
  }

  requisicao: Requisicao={
  id: 0 ,
  nome: '' ,
  quantidade: 0,
  usuario: '',

    material: ''

  }

constructor(
  private service: RequisicaoServiceService,
  private router: Router,
  private route: ActivatedRoute,
  private materialService: MaterialService
){

}

ngOnInit(): void{
  this.id_requisicao= this.route.snapshot.paramMap.get('id')!
  this.findById()
  //this.findByIdMaterial()

}


delete():void{
  this.service.delete(this.id_requisicao).subscribe(resposta =>{
    this.router.navigate(['requisicao'])
    this.service.message("Material deletado com sucesso!!")
  })
}

findById():void{
  this.service.findById(this.id_requisicao).subscribe(resposta => {
    this.requisicao= resposta
  })
}

findByIdMaterial():void{
  this.materialService.findById(this.id_material).subscribe(resposta => {
    this.material=resposta
  })
}

cancel(){
  this.router.navigate(['requisicao'])
}


}
