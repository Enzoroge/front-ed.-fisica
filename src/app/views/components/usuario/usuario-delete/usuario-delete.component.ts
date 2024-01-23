import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Router } from 'next/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent {

  id_usuario=''

  usuario: Usuario={
    nome: '',
    email:'',
    matricula: 0,

  }



  constructor(
    private router: Router,
    private service: UsuarioService,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void{
    this.id_usuario= this.route.snapshot.paramMap.get('id')!
    this.findById()

  }

  delete():void{
    this.service.delete(this.id_usuario).subscribe(resposta =>{
      this.router.navigate(['usuario'])
      // this.service.message("Material deletado com sucesso!!")
    })
  }


  findById():void{
    this.service.findById(this.id_usuario).subscribe(resposta =>{
      this.usuario=resposta
    })
  }

  cancel(){
     this.router.navigate(['usuario'])
  }




}
