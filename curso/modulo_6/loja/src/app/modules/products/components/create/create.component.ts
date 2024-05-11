import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

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

  //importa o service pra utilizar o saveProducts dele. O route serve para manipularmos a rota por dentro do ts, e não pelo html 
  constructor(private ProductsService: ProductsService, private route: Router){}
  
  ngOnInit(): void {
    this.buildForm()
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

  onSave(): void{  
    const product: Product  = this.form.getRawValue()
    this.ProductsService
    .saveProducts(product)
    .pipe(first())
    .subscribe({
      complete: () =>{
        //Quando completa o save de Produto, redireciona a rota para a listagem
        this.route.navigate(['/products'])    
      } ,
      error:(err) =>{
        console.log(err);
        
      } 
    })
    //Como ele retorna void, não precisa manusear o retorno, então não tem o next:

  }

}
