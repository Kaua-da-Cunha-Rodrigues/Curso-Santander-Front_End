import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../products/models/product.model';
import { User } from '../models/user.model';
import { UserCredentials } from '../models/user-credentials.model';
import { AuhtenticatedUser } from '../models/authenticated-user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = `${environment.API_URL}/auth`

  isLoggedIn$ = new BehaviorSubject<boolean>(false)
  
  constructor(private http: HttpClient, private router: Router) { }

  register(user: User): Observable<void>{
    return this.http.post<void>(`${this.apiUrl}/register`, user)
    
  }
  login(user: UserCredentials): Observable<AuhtenticatedUser>{
    return this.http.post<AuhtenticatedUser>(`${this.apiUrl}/login`, user)
    
  }

  checkAuthStatus(): Observable<boolean> {
    const token = localStorage.getItem(environment.TOKEN_KEY) 
    //o !!token faz: se a string retornada for fazia, transforma em false. Se tiver algo, transforma em true
    this.isLoggedIn$.next(!!token)
    return this.isLoggedIn$
  }

  //tira o token da aplicação e verifica novamente e depois redireciona
  logout(): void{
    localStorage.removeItem(environment.TOKEN_KEY)
    this.checkAuthStatus()
    this.router.navigate(['auth', 'login'])
  }

}
