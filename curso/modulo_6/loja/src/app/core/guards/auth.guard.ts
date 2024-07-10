import { inject } from '@angular/core';
import { CanActivateFn, Router, createUrlTreeFromSnapshot } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (activatedRoute) => {

  //Acessa o service no método "checkAuthStatus" e com map, retorna o true ou false (isLoggedIn)
  return inject(AuthService)
    .checkAuthStatus()
    .pipe(
      map((isLoggedIn) =>{
        /*
          se existir o elemento, retorna true, se não vai pro create. 
          Create: A partir da rota em que ele está (na verdade ele ignora o activatedRoute), ele viaja para outra dentro da árvore de rotas
          Só estamos usando o create porque não da pra usar router aqui
        */
        return isLoggedIn 
          ? true 
          : createUrlTreeFromSnapshot(activatedRoute, ['/', 'auth', 'login'])
    }))
};
