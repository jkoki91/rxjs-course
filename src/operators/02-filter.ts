import { range, from, fromEvent } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

range(20,20).pipe(
    filter( (val, i) => {
        console.log('index', i);
         return val % 2 === 1
    } )
)//.subscribe( console.log )

interface Personaje {
    tipo: string;
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];


const persObs$ = from(personajes);
// const persObsPluck$ = persObs$.pipe(
//     pluck('tipo')
// );
const persObsFilter$ = persObs$.pipe(
    filter( val => val.tipo === 'heroe')
);
persObsFilter$.subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ), //<keyboardEvent,string>
    filter( key => key === 'Enter')
);

keyup$.subscribe( console.log )





