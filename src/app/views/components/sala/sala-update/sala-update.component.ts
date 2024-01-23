import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/models/sala';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-sala-update',
  templateUrl: './sala-update.component.html',
  styleUrls: ['./sala-update.component.css']
})
export class SalaUpdateComponent implements OnInit{

  id_sala=''

  sala: Sala={
    nome:''
  }

  constructor(
    private service: SalaService,
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit():void{
    this.id_sala=this.route.snapshot.paramMap.get('id')!
    this.findById();

  }

  update():void{
    this.service.update(this.sala).subscribe((resposta)=>{
      this.router.navigate(['sala'])
      this.service.message("Sala atualizada com sucesso")
    })
  }

  findById():void{
    this.service.findByid(this.id_sala).subscribe((resposta)=>{
      this.sala=resposta
    })
  }

  cancel():void{
    this.router.navigate(['sala'])
  }

}
