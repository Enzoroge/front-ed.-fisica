import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Requisicao } from 'src/app/models/requisicao';
import { Usuario } from 'src/app/models/usuario';
import { MaterialService } from 'src/app/services/material.service';
import { RequisicaoServiceService } from 'src/app/services/requisicao-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-requisicao-read',
  templateUrl: './requisicao-read.component.html',
  styleUrls: ['./requisicao-read.component.css']
})
export class RequisicaoReadComponent {

  usuario: Usuario={
    id: 0,
    nome: '',
    email:'',
    matricula:0

  }

  requisicao: Requisicao[]=[]

  displayedColumns: string[] = ['usuario', 'material', 'quantidade', 'action' ];
  dataSource = new MatTableDataSource<Requisicao>(this.requisicao);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private service: RequisicaoServiceService,
    private materialService: MaterialService,
    private usuarioService: UsuarioService,
    private router: Router,
  ){

  }

  ngAfterViewInit() {
    this.findAll();

  }

  findAll():void{
    this.service.findAll().subscribe(resposta =>{
      this.listaUsuario()
      this.listarMaterial()
      this.requisicao = resposta;
      this.atualizarTabela()
    })
  }

  listaUsuario():void{
    this.requisicao.forEach(x =>{
      this.usuarioService.findById(x.usuario).subscribe(resposta =>{
        x.usuario =resposta.nome;
      })
    })
  }

  listarMaterial():void{
    this.requisicao.forEach(x =>{
      this.materialService.findById(x.material).subscribe(resposta =>{
        x.material = resposta.nome;
      })
    })
  }

  pesquisar(){

  }

  navigateToCreate(){
    this.router.navigate(['requisicao/create'])

  }

  private atualizarTabela(): void {
    this.dataSource.data = this.requisicao;
    this.dataSource.paginator = this.paginator;
  }


}
