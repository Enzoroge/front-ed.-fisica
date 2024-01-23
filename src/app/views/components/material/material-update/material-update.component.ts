import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-update',
  templateUrl: './material-update.component.html',
  styleUrls: ['./material-update.component.css']
})
export class MaterialUpdateComponent implements OnInit{

  id_material=''

  material: Material={
    nome: '',
    quantidade: 0
  }

  nome = new FormControl ('', [Validators.minLength(5)]);
  quantidade = new FormControl ('', [Validators.minLength(1)])

  constructor(
    private router: Router,
    private service: MaterialService,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void{
    this.id_material= this.route.snapshot.paramMap.get('id')!
    this.findById()

  }
  update():void{
    this.service.update(this.material).subscribe((resposta =>{
     this.router.navigate(['material'])
     this.service.message("Material Atualizado com Sucesso!")
    }))
  }

  findById():void{
    this.service.findById(this.id_material).subscribe(resposta =>{
      this.material=resposta
    })
  }

  cancel(){
    this.router.navigate(['material'])
  }

  errorValidName(){
    if(this.nome.invalid){
      return 'O nome é Obrigatório'
    }
    return false;
  }

  errorValidQuantidade(){
    if(this.quantidade.invalid){
      return 'A quantidade é obrigatoria'
    }
    return false
  }

}


