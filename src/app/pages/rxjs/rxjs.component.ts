import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  suscription: Subscription;
  constructor() {

    this.suscription =  this.regresaObservable().subscribe(
      numero => console.log ('Subs', numero),
      error => console.error ('Error', error),
      () => console.log ('Termino')
      );
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.suscription.unsubscribe();

  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        let salida = {
          valor: contador
        };
        observer.next( salida );
        // if ( contador === 3 ) {
        //   clearInterval ( intervalo);
        //   observer.complete();
        // }
        // if ( contador === 2 ) {
        //   observer.error('Auxilio');
        // }
      }, 500);
    }).pipe(map( (resp: any ) => {
      return resp.valor;
    }));
  }

}
