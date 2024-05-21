import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //variante do Behavior que necessita de um valor inicial e emite o valor atual em quem ele tiver escrito (subscribed)
  isLoading$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  setLoading(isLoading: boolean){
    this.isLoading$.next(isLoading) 
  }
}
