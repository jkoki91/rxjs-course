import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';



const numeros$ = of(1,1,'1',2,2,2,2,2,3,2,3,4,1,1,'1');


numeros$.pipe(
    distinctUntilChanged() // emite si no es igual al valor anterior
)
.subscribe( console.log )


interface Personaje {
    nombre: string;
};


const personajes: Personaje[] =[
    { nombre: 'Megaman'},
    { nombre: 'Megaman'},
    { nombre: 'Zero'},
    { nombre: 'X'},
    { nombre: 'X'},
    { nombre: 'Dr. Willy'},
    { nombre: 'Zero'},
    { nombre: 'Megaman'}
];


from( personajes ).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre ) //tiene que devolver un booleano para clasificarlo
)
.subscribe( console.log )


