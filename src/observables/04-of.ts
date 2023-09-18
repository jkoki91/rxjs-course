import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of([1,2,3,4,5,6]); //solo emite un dato porque el argumento es un solo dato, array de numeros
// const obs$ = of<number>(...[1,2,3,4,5,6],2,3,4,5); //con el spread operator podemos 
const obs$ = of( [1,2], { a:1, b:2 }, function(){}, true, Promise.resolve(true) ); //esto permite pasar cualquier tipo de dato

console.log('Inicio del observable');

obs$.subscribe( 
    next => console.log('next', next ),
    null,
    () => console.log('Terminamos la secuencia')
)

console.log('Fin del observable');


