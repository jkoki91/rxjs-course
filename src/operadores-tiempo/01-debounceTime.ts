import { debounceTime, distinctUntilChanged, fromEvent, map, pluck } from "rxjs"


const click$ = fromEvent( document, 'click' );

click$.pipe(
    debounceTime(3000)
)
.subscribe(console.log);


//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup');

input$.pipe(
    // map( ev => ev.key)
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged(), //para asegurarse que solo hace la petición cuando ha cambiado la consulta
)
.subscribe(console.log)









