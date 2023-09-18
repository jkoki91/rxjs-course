import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";


const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append( button );


const counter$ = interval(1000);
// const clickBtn$ = fromEvent( button, 'click' );
const clickBtn$ = fromEvent( button, 'click' ).pipe( // como el anterior pero se salta uno, entonces hay que dar dos veces para que pare el timer
    tap( () => console.log('Tap antes del skip')),
    skip(1),
    tap( () => console.log('Tap despues del skip'))
)

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});






