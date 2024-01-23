import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Agendamento } from 'src/app/models/agendamento';
import { Sala } from 'src/app/models/sala';
import { Usuario } from 'src/app/models/usuario';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { SalaService } from 'src/app/services/sala.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css']
})

export class AgendamentoCreateComponent implements OnInit {

  usuarios: Usuario={
    id:0,
    nome: '',
    email:'',
    matricula:0

  }




  agendamento: Agendamento = {

    horaInicio: new Date().toString(),
    horaFim: new Date().toString(),
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

  usuario: Usuario[] = []
  sala: Sala[] = []





  constructor(
    private usuarioService: UsuarioService,
    private salaService: SalaService,
    private serviceAgendamento: AgendamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarUsuario();
    this.listarSala();
  }

  create(): void {

    if(this.agendamento.horaInicio > this.agendamento.horaFim){
      this.serviceAgendamento.message('A data de inicio deve ser anterior a data final')
    }
    this.agendamento.horaInicio = moment(this.agendamento.horaInicio).format("DD/MM/YYYY HH:mm")
    this.agendamento.horaFim = moment(this.agendamento.horaFim).format("DD/MM/YYYY HH:mm")
    this.serviceAgendamento.create(this.agendamento).subscribe(resposta => {
      this.agendamento=resposta
      this.serviceAgendamento.message("Agendamento realizado com sucesso!");
      this.router.navigate(['agendamento'])
    })
  }

  cancel():void {
    this.router.navigate(['agendamento'])
  }

  listarUsuario():void {
    this.usuarioService.findAll().subscribe(resposta => {
      this.usuario = resposta;
    })
  }



  listarSala(): void {
    this.salaService.findAll().subscribe(resposta => {
      this.sala = resposta;
    })
  }
}
