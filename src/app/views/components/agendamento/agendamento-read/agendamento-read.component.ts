import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/models/agendamento';
import { Usuario } from 'src/app/models/usuario';

import { AgendamentoService } from 'src/app/services/agendamento.service';
import { SalaService } from 'src/app/services/sala.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
})
export class AgendamentoReadComponent implements AfterViewInit  {

  usuario: Usuario={
    id:0,
    nome:'',
    email:'',
    matricula: 0

  }




agendamentos: Agendamento[]=[]





  displayedColumns: string[] = ['usuario','sala', 'inicio', 'fim', 'action' ];
  dataSource = new MatTableDataSource<Agendamento>(this.agendamentos);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: AgendamentoService,
    private router: Router,
    private usuarioService: UsuarioService,
    private salaService: SalaService
  ){

  }

  ngAfterViewInit() {
    this.findAll();


  }
  // findAll(): void {
  //   this.service.findAll().subscribe((resposta) => {
  //     this.usuarios = resposta;
  //     this.atualizarTabela();
  //   });
  // }



  // findAll(): void {
  //   this.service.findAll().subscribe((resposta) => {
  //     this.salas = resposta;
  //     console.log("lista", this.salas)
  //     this.atualizarTabela();
  //   });
  // }

  findAll():void{
    this.service.findAll().subscribe((resposta)=>{
      this.listarSala()
      this.listarUsuario()
      this.agendamentos=resposta
      console.log("agendamento", this.agendamentos)
      this.atualizarTabela()

    })
  }

  navigateToCreate():void{
    this.router.navigate(['agendamento/create'])
  }

   listarUsuario():void{
      this.agendamentos.forEach(x =>{
        this.usuarioService.findById(x.usuario).subscribe(resposta =>{
          x.usuario = resposta.nome
        })
      })
   }



  listarSala():void{
    this.agendamentos.forEach(x =>{
      this.salaService.findByid(x.sala).subscribe(resposta =>{
        x.sala = resposta.nome
      })
    })
  }

  private atualizarTabela(): void {
    this.dataSource.data = this.agendamentos;
    this.dataSource.paginator = this.paginator;
  }


}
