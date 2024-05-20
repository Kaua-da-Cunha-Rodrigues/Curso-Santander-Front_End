import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../products/models/product.model';
import { User } from '../models/user.model';
import { UserCredentials } from '../models/user-credentials.model';
import { AuhtenticatedUser } from '../models/authenticated-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = `${environment.API_URL}/auth`
  
  constructor(private http: HttpClient) { }

  register(user: User): Observable<void>{
    return this.http.post<void>(`${this.apiUrl}/register`, user)
    
  }
  login(user: UserCredentials): Observable<AuhtenticatedUser>{
    return this.http.post<AuhtenticatedUser>(`${this.apiUrl}/login`, user)
    
  }

}
