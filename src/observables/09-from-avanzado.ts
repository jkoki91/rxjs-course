import { of, from } from 'rxjs';


/**
* of = toma argumentos y genera una secuencia
* from = array, promise, iterable, observable
*/


const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
};

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

// for( let id of miIterable ) {
//     console.log(id);
// }

from( miIterable ).subscribe( observer );

// const sources$ = from([1,2,3,4,5]);
// const sources$ = of(...[1,2,3,4,5]);

const sources$ = from(fetch('https://api.github.com/users/klerith'));

// sources$.subscribe( async(resp) => {

//     // sources$.subscribe( (resp) => {
//     // resp.json( ).then( data => console.log(data) );

//     const dataResp = await resp.json();
//     console.log(dataResp);
// })

// sources$.subscribe( observer );

