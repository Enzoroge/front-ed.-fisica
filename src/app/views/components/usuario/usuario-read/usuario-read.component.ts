import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent {

  usuario: Usuario= {
    id: 0 ,
    nome: '',
    email: '',
    matricula: 0,

  }


  // termoPesquisa:string=''





  usuarios: Usuario[] = [];
  nome: string = '';

  displayedColumns: string[] = ['id', 'nome', 'e-mail', 'matricula', 'action'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: UsuarioService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.findAll();

  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.usuarios = resposta;
      this.atualizarTabela();
    });
  }

  pesquisar(): void {
    if (this.nome.trim() !== '') {
      this.service.pesquisar(this.nome)
        .subscribe((retorno) => {
          this.usuarios = retorno;
          console.log("Resultado da pesquisa", this.usuario);
         this.atualizarTabela()
        });
    } else {
      alert("material nao encontrado")
    }
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
  //         this.material = retorno;
  //         console.log("Resultado da pesquisa", this.material);
  //        this.atualizarTabela()
  //       });
  //   } else {
  //     console.log("material nao encontrado")
  //   }
  // }

  private atualizarTabela(): void {
    this.dataSource.data = this.usuarios;
    this.dataSource.paginator = this.paginator;
  }

  navigateToCreate(): void {
    this.router.navigate(['usuario/create']);
  }
}



