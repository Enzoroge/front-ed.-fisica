import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl = 'http://localhost:8081/usuarios'


  constructor(
    private http: HttpClient,
    private snack : MatSnackBar
  ) { }

  findAll():Observable<Usuario[]>{
    const url = this.usuarioUrl;
    return this.http.get<Usuario[]>(url)
  }

  findById(id: any):Observable<Usuario>{
    const url = `${this.usuarioUrl}/${id}`;
    return this.http.get<Usuario>(url)
  }

  pesquisar(nome: string): Observable<Usuario[]> {
    // const url = this.materialUrl + "/material/" + material.nome;
     const params = new HttpParams().set('nome', nome);
    return this.http.get<Usuario[]>(`${this.usuarioUrl}/nome`, { params });
    // return this.http.get<Material>(url)

  }

  update(usuario: Usuario):Observable<Usuario>{
    const url = `${this.usuarioUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario)

  }

  delete(id: any):Observable<void>{
    const url = `${this.usuarioUrl}/${id}`
    return this.http.delete<void>(url)
  }

  create(usuario: Usuario):Observable<Usuario>{
    const url = this.usuarioUrl;
    return this.http.post<Usuario>(url, usuario);
  }

  message(msg : String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })

  }



}
