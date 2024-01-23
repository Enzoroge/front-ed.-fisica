import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-delete',
  templateUrl: './material-delete.component.html',
  styleUrls: ['./material-delete.component.css']
})
export class MaterialDeleteComponent {
  id_material=''

  material: Material={
    nome: '',
    quantidade: 0
  }



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

  delete():void{
    this.service.delete(this.id_material).subscribe(resposta =>{
      this.router.navigate(['material'])
      this.service.message("Material deletado com sucesso!!")
    })
  }


  findById():void{
    this.service.findById(this.id_material).subscribe(resposta =>{
      this.material=resposta
    })
  }

  cancel(){
    this.router.navigate(['material'])
  }



}
