import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NUMBERING_SYSTEM } from 'ngx-material-timepicker';
import { Agendamento } from 'src/app/models/agendamento';
import { Sala } from 'src/app/models/sala';
import { Usuario } from 'src/app/models/usuario';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-agendamento-update',
  templateUrl: './agendamento-update.component.html',
  styleUrls: ['./agendamento-update.component.css']
})
export class AgendamentoUpdateComponent implements OnInit{

  id_sala=''

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
        nome:''

      },

  }


  sala: Sala={
    id:0,
    nome:''
  }




  agendamentos: Agendamento[]=[]

  constructor(
    private salaService: SalaService,
    private service: AgendamentoService,
    private router : ActivatedRoute,
    private route: Router
  ){}

  ngOnInit(){
    this.id_agendamento=this.router.snapshot.paramMap.get('id')!
    this.id_sala=this.router.snapshot.paramMap.get('id')!
    this.findById()
    this.findByIdSala()


  }


  update():void{
    this.service.update(this.agendamento).subscribe(resposta => {
      this.route.navigate(['agendamento'])
      this.findByIdSala()
    })
  }

  findById():void{
    this.service.findById(this.id_agendamento).subscribe(resposta => {
      this.agendamento=resposta

    })

  }

  findByIdSala():void{
    this.salaService.findByid(this.id_sala).subscribe(resposta => {
      this.sala.nome=resposta.nome
    })
  }





  cancel(){
    this.route.navigate(['agendamento'])
  }

}
