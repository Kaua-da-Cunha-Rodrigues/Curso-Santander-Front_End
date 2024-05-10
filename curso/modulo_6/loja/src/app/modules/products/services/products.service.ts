import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';


//esse injectable faz com que você possa injetar esse service, e o 'root' permite puxar esse servide desde a raíz, ou seja, de qualquer lugar e qualquer raíz da árvore de componentes
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  //Puxa a url do environment onde serão enviados os dados para o componente e concatena aonde ela será utilizada, no caso products
  apiUrl = `${environment.API_URL}/products`
  // apiUrl = `${environment.API_URL}/products`

  //na construção da página ele cria um atributo chamado http do tipo HttpClient
  constructor(private http: HttpClient) { }

  //ele não faz a puxada dos componentes com pipe, isso quem faz será o componente. Ele apenas entrega a lista para o componente. Envia um observable de Product []
  getProducts(): Observable<Product []>{
    return this.http.get<Product[]>(this.apiUrl)
    
  }
}
