import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Observable, Subject, first, takeUntil } from 'rxjs';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnDestroy, OnInit{
  //A ideia aqui é manter esse ng vivo enquanto o componente estiver vivo, e destruí-lo assim que ele acabar
  protected ngUnsubscribe = new Subject()

  products?: Product[]


  /*
    esse código abaixo é apenas para demonstar que, quando você navega de um componente para outro usando rotas, os observables ainda funcionam, o que pode gerar gargalo no sistema caso tenham muitos observables que não estão sendo usados, mas continuam rodando
  */
  observable = new Observable((observer) =>{
    let counter = 0
    setInterval(() =>{
      observer.next(++counter);
      
    }, 1000)   
  })

  /*
    puxa o service para obter a lista. Essa puxada é feita no constructor, pois é um elemento de muita urgência. Ele é puxado antes mesmo do OnInit
  */
  constructor(private productsService: ProductsService){}

  //Executado uma só vez, quando o componente é iniciado e após receber todos os dados de @input()
  ngOnInit(){
    this.getProducts() 

    /*
      o observable vai fazer a leitura até que o ngUnsubscribe der complete (encerrar), fazendo com que o observable acabe junto do componente, lá embaixo no método NgDestroy
    */
    this.observable.pipe(takeUntil(this.ngUnsubscribe)).subscribe((response) => console.log(response))
  }

  /*
    ele pega os produtos que foram armazenados lá no crudcrud e joga no atributo products, que recebe um array de produtos
  */
  getProducts(): void{
    //chamo o método getProducts do service e  popula o this.products com os dados recebidos
    this.productsService
    .getProducts()
    .pipe(first())
    .subscribe({
      next: (response: Product[]) =>{
        this.products = response
      },
      error: (err) => {
        (console.log(err))
      }
    })
  }

  onDelete(id: string): void{
    
    //chama a função delete que envia um id, e depois de completado chama o getProducts para recarregar a lista
    this.productsService
    .deleteProduct(id) 
    .pipe(first())
    .subscribe({
      complete: () =>{
        
        this.getProducts()
      },
      error: (err) =>{
        (console.log(err))
      } 
     
    }) 
  }
  //Executado quando o componente é destruído
  ngOnDestroy(): void {
    //Passos para encerrar o ngSubscribe
    this.ngUnsubscribe.next(true)
    this.ngUnsubscribe.complete()  
  }
}
