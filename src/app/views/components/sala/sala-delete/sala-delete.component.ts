import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/models/sala';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-sala-delete',
  templateUrl: './sala-delete.component.html',
  styleUrls: ['./sala-delete.component.css']
})
export class SalaDeleteComponent {

  id_sala=''

  sala: Sala={

    nome: ''

  }


  constructor(
    private router: Router,
    private service: SalaService,
    private route: ActivatedRoute
  ){

  }

  ngOnInit():void{
    this.id_sala=this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  delete():void{
    this.service.delete(this.id_sala).subscribe((resposta)=>{
      this.router.navigate(['sala'])
      this.service.message("Sala de aula apagada!")
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
