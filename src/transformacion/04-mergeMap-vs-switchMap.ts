import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';



const click$    = fromEvent( document, 'click' );
const interval$ = interval(1000);


click$.pipe(
    switchMap( () => interval$ ), //El switcmap solo mantiene una suscripción activa, el mergemap todas 
    // mergeMap( () => interval$ ),
).subscribe( console.log );


