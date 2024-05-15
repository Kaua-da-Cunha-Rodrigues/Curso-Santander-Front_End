import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { first } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent implements OnInit{
  //cria um form do tipo FormGroup, que deve receber seus controls (inputs)
  form!: FormGroup

  id?: string
  //importa o service pra utilizar o saveProducts dele. O route serve para manipularmos a rota por dentro do ts, e não pelo html 
  constructor(
    private productsService: ProductsService,
    private router: Router,
    //Isso é pra ser usado para editar o produto
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.buildForm()

    //Acessa através da rota o id do produto em edição
    this.id = this.route.snapshot.params['id']

    //se o id existe, então a edição está ativa
    if(this.id){
      this.getProduct(this.id)
    }
  }

  buildForm(): void{
    //Cria de fato o grupo e já atribui os seus controls. Inicialmente eles iniciam em nulo e usa um validador para ver se eles foram preenchidos
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      qty: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required])  
    })
  }

  //faz a chamada do produto para a edição dos dados
  getProduct(id: string): void{
    this.productsService
    .getProductById(id)
    .pipe(first())
    .subscribe({
      next: (product) =>{
        //preenche os valores do formulário com os valores puxados através do id do produto
        this.form.patchValue(product)   
      } ,
      error:(err) =>{
        console.log(err);
        
      } 
    })
  }

  //Como ele retorna void, não precisa manusear o retorno, então não tem o next:
  onSave(): void{  
    const product: Product  = this.form.getRawValue()
    
    //Se existe o id na rota, então quer dizer que está na página de edição, então ele chama o método de editar
    if(this.id){
      this.updateProduct(product)  
      return
    }

    //Se não ele passa direto pelo if e considera como criação de produto
    this.createProduct(product)  
  
  }

  //Dividi o método onSave em dois: um chamando o método para criar o produto do service. Essa abaixo
  createProduct(product: Product): void{
    this.productsService
    .saveProducts(product)
    .pipe(first())
    .subscribe({
      complete: () =>{
        //Quando completa o save de Produto, redireciona a rota para a listagem
        this.router.navigate(['/products'])    
      } ,
      error:(err) =>{
        console.log(err);
        
      } 
    })    
  }

  //Outra chamando o método de dar update no produto do service. Veja que ela envia o id do produto a ser alterado e os novos valores em product
  updateProduct(product: Product):void{
    this.productsService
    .updateProduct(this.id!, product)
    .pipe(first())
    .subscribe({
      complete: () =>{
        //Quando completa o save de Produto, redireciona a rota para a listagem
        this.router.navigate(['/products'])    
      } ,
      error:(err) =>{
        console.log(err);
        
      } 
    })
  }

}
