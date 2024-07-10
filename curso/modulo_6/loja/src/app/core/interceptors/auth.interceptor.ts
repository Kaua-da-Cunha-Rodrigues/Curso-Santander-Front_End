import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //Como aqui não é uma classe, não da pra ter o router dentro do constructor, então damos inject nele para podermos usar e alterar a rota
  const router = inject(Router)

  if(req.url.includes('/auth')){
    return next(req);
  }

  const token = localStorage.getItem(environment.TOKEN_KEY) || ''

  /*
    Uma requisição é imutável, portanto não pode ser alterada. Para modificarmos ela e enviar a req, criamos uma cópia dela
    Ele faz a função do antigo método privado de products.service "setHeaders"
    Nesse caso, ele faz a autenticação para todas as requisições, porém não queremos isso
  */
  const newReq = req.clone({
    setHeaders: {
      Authorization: token
    }
  })

  //ele retorna um observable, então daremos:
  return next(newReq).pipe(
    //Captura o erro, caso ocorra
    catchError((err: HttpErrorResponse) =>{
      /*
        se o status do erro, que pode ser visto no F12 do navegador for 401 ou 403, imprime a mensagem no atributo error do err
      */
      if(err.status === 401 || err.status === 403){
        console.error(err.error.message);
        //Como o usuário não tem id, ele redireciona para fazer login
        router.navigate(['auth', 'login'])        
      }
      return  throwError(() => err)        
    })
  );
};
