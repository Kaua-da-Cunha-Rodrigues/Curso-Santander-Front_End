import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Observable, Subject, first, takeUntil } from 'rxjs';
import { Product } from '../../models/product.model';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../../commons/components/confirmation-modal/confirmation-modal.component';

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
  constructor(
    private productsService: ProductsService, 
    public dialog: MatDialog,
    private router: Router
  ){}

  //Executado uma só vez, quando o componente é iniciado e após receber todos os dados de @input()
  ngOnInit(){
    this.getProducts() 

    /*
      o observable vai fazer a leitura até que o ngUnsubscribe der complete (encerrar), fazendo com que o observable acabe junto do componente, lá embaixo no método NgDestroy
    */
    this.observable.pipe(takeUntil(this.ngUnsubscribe)).subscribe((response) => console.log(response))

    console.log(this.products);
    
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

  /*Esse método irá abrir o modal para confirmar a exclusão ou não do produto */
  openDialog(id: string): void {
    //armazena o diálogo
    const dialog = this.dialog.open(ConfirmationModalComponent, {
      width: '250px',
      //Só fecha quando clicar no botão
      disableClose: true,
      //passa o id para o modal
      data:{
        id,
      }
    });

    /*
      Quando fechar o modal, entra aqui.
      Esse subscribe vai receber o valor retornado la do componente confirmation modal. O valor retornado é dado em confirmation.component.html em "mat-dialog-close"
    */
    dialog
    .afterClosed()
    .pipe(first())
    .subscribe((res) =>{
      //se o retorno for "sim" para excluir, chama onDelete que deleta o produto
      if (res){
        this.onDelete(id)
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

  editProduct(id: string): void{
    this.router.navigate(['products', 'edit', id])
  }
  //Executado quando o componente é destruído
  ngOnDestroy(): void {
    //Passos para encerrar o ngSubscribe
    this.ngUnsubscribe.next(true)
    this.ngUnsubscribe.complete()  
  }
}
