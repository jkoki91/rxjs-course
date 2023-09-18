import { from } from "rxjs";
import { map, reduce, scan } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, curr) => {
//     return acc + curr;
// }
const totalAcumulador = (acc, curr) =>  acc + curr;

// Reduce

from( numeros ).pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log );

// scan

from( numeros ).pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log );

// Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
};

const user: Usuario[] = [
    { id:'koke', autenticado: false, token: null },
    { id:'koke', autenticado: true, token: 'ABC' },
    { id:'koke', autenticado: false, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<Usuario>( (acc, cur) => { //Aqui en el video le pasa 2 argumentos, pero a mi solo me deja pasarle uno
        return { ...acc, ...cur }
    })
);

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe( console.log );





