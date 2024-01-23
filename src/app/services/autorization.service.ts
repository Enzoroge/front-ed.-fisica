import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Autorization } from '../models/autorization';
import { AutorizationResponse } from '../models/autorizationResponse';
import { AuthRequest } from '../models/authRequest';
import { AuhtResponse } from '../models/authResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AutorizatioService{

  autorizationUrl = 'http://localhost:8081/auth'


  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ){}

  registrarUsuario(requestData: Autorization):Observable<AutorizationResponse>{
    return this.http.post<AutorizationResponse>(
      `${this.autorizationUrl}/register`,
      requestData
    )
  }

  authUser(requesDatas: AuthRequest ):Observable<AuhtResponse>{
    return this.http.post<AuhtResponse>(`${this.autorizationUrl}/login`, requesDatas)

  }

  isLoggedIn(): boolean{
    const JWT_TOKEN = this.cookie.get('USER_INFO');
    return JWT_TOKEN ? true : false;


  }


}
