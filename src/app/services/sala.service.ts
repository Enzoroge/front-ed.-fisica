import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../models/sala';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  salaUrl = 'http://localhost:8081/salas'


  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }

  findByid(id: any):Observable<Sala>{
    const url = `${this.salaUrl}/${id}`;
    return this.http.get<Sala>(url)
  }

  findAll():Observable<Sala[]>{
    const url = this.salaUrl;
    return this.http.get<Sala[]>(url)
  }

  create(sala: Sala):Observable<Sala>{
    const url = this.salaUrl;
    return this.http.post<Sala>(url, sala)

  }

  delete(id: any):Observable<void>{
  const url = `${this.salaUrl}/${id}`;
  return this.http.delete<void>(url)
  }

  update(sala: Sala):Observable<Sala>{
    const url= `${this.salaUrl}/${sala.id}`
    return this.http.put<Sala>(url, sala)
  }

  message(msg : String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })

  }
}
