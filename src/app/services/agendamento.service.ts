import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {


  agendamentoUrl ="http://localhost:8081/agendamentos"


  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }



  findAll():Observable<Agendamento[]>{
    const url = this.agendamentoUrl;
    return this.http.get<Agendamento[]>(url)
  }

  findById(id: any):Observable<Agendamento>{
    const url = `${this.agendamentoUrl}/${id}`;
    return this.http.get<Agendamento>(url)
  }

  pesquisar(nome: string): Observable<Agendamento[]> {
    // const url = this.materialUrl + "/material/" + material.nome;
     const params = new HttpParams().set('nome', nome);
    return this.http.get<Agendamento[]>(`${this.agendamentoUrl}/nome`, { params });
    // return this.http.get<Material>(url)

  }

  update(agendamento: Agendamento):Observable<Agendamento>{
    const url = `${this.agendamentoUrl}/${agendamento.id}`;
    return this.http.put<Agendamento>(url, agendamento)

  }

  delete(id: any):Observable<void>{
    const url = `${this.agendamentoUrl}/${id}`
    return this.http.delete<void>(url)
  }

  create(agendamento: Agendamento):Observable<Agendamento>{
    const url = this.agendamentoUrl;
    return this.http.post<Agendamento>(url, agendamento);
  }

  message(msg: String):void{
    this.snack.open(`${msg}`, 'ok',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000


    })
  }

}
