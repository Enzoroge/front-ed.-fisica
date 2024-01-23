import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requisicao } from '../models/requisicao';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoServiceService {

  requisicaoUrl = 'http://localhost:8081/requisicoes'

  constructor(
    private http: HttpClient,
    private snack : MatSnackBar
  ) { }

  findAll():Observable<Requisicao[]>{
    const url = this.requisicaoUrl;
    return this.http.get<Requisicao[]>(url)
  }

  findById(id: any):Observable<Requisicao>{
    const url = `${this.requisicaoUrl}/${id}`;
    return this.http.get<Requisicao>(url)
  }
  // findById(id: any):Observable<Requisicao>{
  //   const url = this.requisicaoUrl;
  //   return this.http.get<Requisicao>(url);
  // }

  create(requisicao: Requisicao):Observable<Requisicao>{
    const url = this.requisicaoUrl;
    return this.http.post<Requisicao>(url, requisicao)
  }

  update(requisicao: Requisicao):Observable<Requisicao>{
    const url = `${this.requisicaoUrl}/${requisicao.id}`
    return this.http.put<Requisicao>(url, requisicao)
  }

  delete(id: any):Observable<void>{
    const url = `${this.requisicaoUrl}/${id}`
    return this.http.delete<void>(url)
  }
  message(msg : String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })

  }


}
