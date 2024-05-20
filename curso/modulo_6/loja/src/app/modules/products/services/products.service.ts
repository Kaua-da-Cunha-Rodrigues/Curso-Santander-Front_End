import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';


//esse injectable faz com que você possa injetar esse service, e o 'root' permite puxar esse service desde a raíz, ou seja, de qualquer lugar e qualquer raíz da árvore de componentes
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
  
    //envia o token junto pro servidor
    return this.http.get<Product[]>(this.apiUrl, this.setHeaders())
    
  }

  //puxa o produto através do id que será usado para editar o produto já cadastrado
  getProductById(id: string): Observable<Product>{

     //envia o token junto pro servidor
    return this.http.get<Product>(`${this.apiUrl}/${id}`, this.setHeaders())
    
  }

  //Ao invés de receber (get) ele vai enviar para o banco de dados o product (post). Ela não retorna nada, portanto observable void
  saveProducts(product: Product): Observable<void>{

     //envia o token junto pro servidor
    return this.http.post<void>(this.apiUrl, product, this.setHeaders())
    
  }

  updateProduct(id: string, product: Product): Observable<void>{
    //Da um put para o update passando a rota e o produto
     //envia o token junto pro servidor
    return this.http.put<void>(`${this.apiUrl}/${id}`, product, this.setHeaders())
    
  }

  //Pra deletar produtos
  deleteProduct(id: string): Observable<void>{

     //envia o token junto pro servidor
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.setHeaders())
    
  }
  private setHeaders(){
    //O token pode não existir, então ou ele é o Token_key ou então nada
    const token = localStorage.getItem(environment.TOKEN_KEY) ?? ''

    const headers: HttpHeaders = new HttpHeaders().set('Authorization', token)  

    return { headers }
  }
}
