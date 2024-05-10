import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./modules/products/products.component";
import { HeaderComponent } from "./commons/components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductsComponent, HeaderComponent]
})
export class AppComponent {
  title = 'loja';
}
