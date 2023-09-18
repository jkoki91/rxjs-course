import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1,5).pipe(
    // map<number,number>( val => { //opcion 1
    //     return val*10
    // })
    // map<number,number>( val =>  val*10)  //opcion 2
    // map<number,string>( val =>  (val*10).toString() )  //opcion 3 con string
// )
//     .subscribe( console.log )


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map( event => event.code )
);
// const keyupPluck$ = keyup$.pipe(
//     pluck('key')
// );
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI') //Esto es para acceder dentro de la propiedad target a la propiedad baseURI (terget.baseURI)
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyup$.subscribe( console.log )
// keyup$.subscribe( val => console.log('map', val) );// esto no dice la tecla porque atiende al primer observable, cuando le hago map ya es otro observable diferente
keyupCode$.subscribe( code => console.log('map', code) );
keyupPluck$.subscribe( code => console.log('pluck', code) )
keyupMapTo$.subscribe( code => console.log('mapTo', code) )











