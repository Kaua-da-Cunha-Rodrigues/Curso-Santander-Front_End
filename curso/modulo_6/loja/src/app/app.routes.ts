import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { AuthComponent } from './modules/auth/auth.component';

export const routes: Routes = [
    //criação de uma rota para products
    {
        //se a url não especificar a rota, manda para products
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: "auth",
        component: AuthComponent
    }
];
