import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent {

  id_usuario=''

  usuario: Usuario={
    id: 0,
    nome: '',
    email:'',
    matricula: 0,

  }

  // nome = new FormControl ('', [Validators.minLength(5)]);
  // quantidade = new FormControl ('', [Validators.minLength(1)])

  constructor(
    private router: Router,
    private service: UsuarioService,
    private route: ActivatedRoute,
    private message: MessageService
  ){

  }
  ngOnInit(): void{
    this.id_usuario= this.route.snapshot.paramMap.get('id')!
    this.findById()

  }
  update():void{
    this.service.update(this.usuario).subscribe((resposta =>{
     this.router.navigate(['usuario'])
    this.message.add({
      severity:'success',
      summary:'success',
      detail:'Usuario atualizado!',
      life: 3000
    })
    }))
  }

  findById():void{
    this.service.findById(this.id_usuario).subscribe(resposta =>{
      this.usuario=resposta
    })
  }

  cancel(){
    this.router.navigate(['usuario'])
  }

  // errorValidName(){
  //   if(this.nome.invalid){
  //     return 'O nome é Obrigatório'
  //   }
  //   return false;
  // }

  // errorValidQuantidade(){
  //   if(this.quantidade.invalid){
  //     return 'A quantidade é obrigatoria'
  //   }
  //   return false
  // }


}
