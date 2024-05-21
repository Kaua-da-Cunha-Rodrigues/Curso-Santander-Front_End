import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../../commons/services/loading.service';
import { finalize } from 'rxjs';

//mais de uma request pode estar rodando ao mesmo tempo, então existe a chance do loading sair na hora errada. Portanto criou-se essa variável
let totalRequests = 0

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  //Puxa o service Loading
  const loadingService = inject(LoadingService)

  //quando ele lê uma request, incremente 1
  totalRequests++

  //seta o loading como true, ou seja, ele aparece
  loadingService.setLoading(true)

  //Como em auth interceptor da um catch, aqui ele da um finalize, que seria o finaly, para que na finalização da requisição, execute isso
  return next(req).pipe(
    finalize(() =>{
      //Quando finaliza a req, decrementa 1
      totalRequests--

      //se não existir nenhuma req rodando, ai sim ele tira o loading
      if(totalRequests === 0){
        //tira o loading da tela, dando false
        loadingService.setLoading(false)
      }
    })
  );
};
