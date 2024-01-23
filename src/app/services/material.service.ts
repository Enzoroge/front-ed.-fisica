import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../models/material';
import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class MaterialService {



  materialUrl = 'http://localhost:8081/materiais'
  // headers: HttpHeaders;


  constructor(private http: HttpClient,
    private snack : MatSnackBar) {
    // this.headers = new HttpHeaders();
  }

  findAll(): Observable<Material[]>{
    const url = this.materialUrl ;
    return this.http.get<Material[]>(url);
  }

  findById(id: any):Observable<Material>{
    const url = `${this.materialUrl}/${id}`;
    return this.http.get<Material>(url)
  }
  // pesquisar(nome: string): Observable<any> {
  //   const url = `${this.materialUrl}?nome=${nome}`;
  //   return this.http.get<any>(url);
  // }
  pesquisar(nome: string): Observable<Material[]> {
    // const url = this.materialUrl + "/material/" + material.nome;
     const params = new HttpParams().set('nome', nome);
    return this.http.get<Material[]>(`${this.materialUrl}/nome`, { params });
    // return this.http.get<Material>(url)

  }

  update(material: Material): Observable<Material>{
    const url = `${this.materialUrl}/${material.id}`;
    return this.http.put<Material>(url, material)
  }

  delete(id: any):Observable<void>{
    const url = `${this.materialUrl}/${id}`;
    return this.http.delete<void>(url);

  }

  create(material: Material):Observable<Material>{
    const url = this.materialUrl;
    return this.http.post<Material>(url, material);
  }

  message(msg : String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })

  }



}
