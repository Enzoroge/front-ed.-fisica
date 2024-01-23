import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from 'src/app/models/sala';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-sala-create',
  templateUrl: './sala-create.component.html',
  styleUrls: ['./sala-create.component.css']
})
export class SalaCreateComponent implements OnInit{

  sala: Sala ={
    nome: ''
  }

  constructor(
    private router: Router,
    private service: SalaService
  ){

  }

  ngOnInit(): void {

  }

  create():void{
    this.service.create(this.sala).subscribe((resposta)=>{
      this.router.navigate(['sala'])
      this.service.message("Sala de aula cadastrada!")

    })
  }

  cancel():void{
    this.router.navigate(['sala'])
  }

}
