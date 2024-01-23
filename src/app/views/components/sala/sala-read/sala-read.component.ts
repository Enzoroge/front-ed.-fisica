import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sala } from 'src/app/models/sala';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-sala-read',
  templateUrl: './sala-read.component.html',
  styleUrls: ['./sala-read.component.css']
})
export class SalaReadComponent implements AfterViewInit {
  sala: Sala= {
     nome: '',

   }


  // termoPesquisa:string=''





  salas: Sala[] = [];
  nome: string = '';

  displayedColumns: string[] = ['id', 'nome', 'action'];
  dataSource = new MatTableDataSource<Sala>(this.salas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: SalaService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.findAll();


  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.salas = resposta;
      console.log("lista", this.salas)
      this.atualizarTabela();
    });
  }

  // pesquisar(_nome: string): void {
  //   console.log("pesquisa pelo nome" , this.nome)
  //   this.service.pesquisar(this.nome).subscribe((resposta) => {
  //     console.log("resposta da pesquisa", resposta);

  //     this.materiais = resposta;
  //     this.atualizarTabela();
  //     this.dataSource.paginator = this.paginator;
  //     console.log(this.materiais)
  //   });
  // }
  // pesquisar(): void {
  //   if (this.nome.trim() !== '') {
  //     this.service.pesquisar(this.nome)
  //       .subscribe((retorno) => {
  //         this.materiais = retorno;
  //         console.log("Resultado da pesquisa", this.materiais);
  //        this.atualizarTabela()
  //       });
  //   } else {
  //     alert("material nao encontrado")
  //   }
  // }

  private atualizarTabela(): void {
    this.dataSource.data = this.salas;
    this.dataSource.paginator = this.paginator;
  }

  navigateToCreate(): void {
    this.router.navigate(['sala/create']);
  }

}
