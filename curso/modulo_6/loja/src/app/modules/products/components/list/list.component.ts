import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject, first, takeUntil } from 'rxjs';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule, HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnDestroy, OnInit{
  //A ideia aqui é manter esse ng vivo enquanto o componente estiver vivo, e destruí-lo assim que ele acabar
  protected ngUnsubscribe = new Subject()

  products?: Product[]
  // apiUrl = https://localhost:3000/products"
  apiUrl = "https://crudcrud.com/api/12c6ded592194e43b7f407dfc5ed0c15/products"


  //esse código abaixo é apenas para demonstar que, quando você navega de um componente para outro usando rotas, os observables ainda funcionam, o que pode gerar gargalo no sistema caso tenham muitos observables que não estão sendo usados, mas continuam rodando
  observable = new Observable((observer) =>{
    let counter = 0
    setInterval(() =>{
      observer.next(++counter);
      
    }, 1000)   
  })

  constructor(private http: HttpClient){}

  //Executado uma só vez, qunado o componente é iniciado e após receber todos os dados de @input()
  ngOnInit(){
    this.getProducts() 

    //o observable vai fazer a leitura até que o ngUnsubscribe der complete (encerrar), fazendo com que o observable acabe junto do componente, lá embaixo no método NgDestroy
    this.observable.pipe(takeUntil(this.ngUnsubscribe)).subscribe((response) => console.log(response))
  }

  //ele pega os produtos que foram armazenados lá no crudcrud e joga no atributo products, que recebe um array de produtos
  getProducts(): void{
    this.http.get<Product[]>(this.apiUrl)
    .pipe(first())
    .subscribe({
      next: (response: Product[]) =>{
        this.products = response
      },
      error: (err) => (console.log(err))
     
    })
  }

  //Executado quando o componente é destruído
  ngOnDestroy(): void {
    //Passos para encerrar o ngSubscribe
    this.ngUnsubscribe.next(true)
    this.ngUnsubscribe.complete()  
  }
}
