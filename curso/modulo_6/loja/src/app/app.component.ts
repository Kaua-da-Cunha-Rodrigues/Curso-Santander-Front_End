import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./modules/products/products.component";
import { HeaderComponent } from "./commons/components/header/header.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingService } from './commons/services/loading.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductsComponent, HeaderComponent, MatProgressSpinnerModule, CommonModule]
})
export class AppComponent implements OnInit{
  title = 'loja';

  isLoading = false
  
  constructor(private loadingService: LoadingService){}

  
  ngOnInit(): void {
    //Recebe a resposta do Service do valor atual do isLoading$ (true ou false)
    this.loadingService.isLoading$.subscribe((res) =>{
      this.isLoading = res
    })  
  }
}
