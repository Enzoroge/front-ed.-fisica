import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { SalaService } from 'src/app/services/sala.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agendamento-delete',
  templateUrl: './agendamento-delete.component.html',
  styleUrls: ['./agendamento-delete.component.css']
})
export class AgendamentoDeleteComponent {

  id_agendamento=''

  agendamento: Agendamento={
    id: 0,
    horaInicio: '',
    horaFim: '',
    usuario: {
      id: 0,
      nome: '',
      email: '',
      matricula: 0
    },
    sala: {
      id:0,

    },


  }



  constructor(

    private router: Router,
    private service: AgendamentoService,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void{
    this.id_agendamento= this.route.snapshot.paramMap.get('id')!
    this.findById()


  }

  delete():void{
    this.service.delete(this.id_agendamento).subscribe(resposta =>{
      this.router.navigate(['agendamento'])
      this.service.message("Agendamento deletado com sucesso!!")
    })
  }


  findById():void{
    this.service.findById(this.id_agendamento).subscribe(resposta =>{
      this.agendamento=resposta
    })
  }



  cancel(){
     this.router.navigate(['agendamento'])
  }



}
