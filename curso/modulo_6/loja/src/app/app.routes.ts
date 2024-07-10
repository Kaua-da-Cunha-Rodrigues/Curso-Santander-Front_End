import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { AuthComponent } from './modules/auth/auth.component';
import { CreateComponent } from './modules/products/components/create/create.component';
import { ListComponent } from './modules/products/components/list/list.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    //criação de uma rota para products
    {
        //se a url não especificar a rota, manda para products
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    //criação de uma rota para autenticação
    {
        path: "auth",
        component: AuthComponent,
        children:[
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'products',
        component: ProductsComponent,
        //Chama o guard, só permitindo que essa rota seja acessada se passar pelo guard. Isso servirá pra todas as suas rotas filhas
        canActivate: [authGuard],

        //O children indica as rotas que são filhas de uma outra. Nesse caso, temos a rota filha 'create' da rota pai 'products', sendo carregada na url como products/create
        children:[
            {
                path: 'create',
                component: CreateComponent,
            },
            //Como esse path não possui nada, ele é a rota padrão para a rota de products
            {
                path: '',
                component: ListComponent
            },
            //:id pois significa que essa informação vai ser substituída depois, no caso pelo id
            {
                path: 'edit/:id',
                component:CreateComponent
            }
        ]
    },
];
