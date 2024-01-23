//
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';

// export interface Material {
//   id: number;
//   nome: string;
//   quantidade: number;
// }

@Component({
  selector: 'app-materia-read',
  templateUrl: './materia-read.component.html',
  styleUrls: ['./materia-read.component.css']
})
export class MateriaReadComponent implements AfterViewInit {
  // material: Material= {
  //   nome: '',
  //   quantidade: 0
  // }


  // termoPesquisa:string=''





  materiais: Material[] = [];
  nome: string = '';

  displayedColumns: string[] = ['id', 'nome', 'quantidade', 'action'];
  dataSource = new MatTableDataSource<Material>(this.materiais);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: MaterialService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.findAll();

  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.materiais = resposta;
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
  pesquisar(): void {
    if (this.nome.trim() !== '') {
      this.service.pesquisar(this.nome)
        .subscribe((retorno) => {
          this.materiais = retorno;
          console.log("Resultado da pesquisa", this.materiais);
         this.atualizarTabela()
        });
    } else {
      this.service.message("material nao encontrado")
    }
  }

  private atualizarTabela(): void {
    this.dataSource.data = this.materiais;
    this.dataSource.paginator = this.paginator;
  }

  navigateToCreate(): void {
    this.router.navigate(['material/create']);
  }
}
