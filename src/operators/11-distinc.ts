import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';



const numeros$ = of(1,1,'1',2,2,3,2,3,4,1,1,'1');


numeros$.pipe(
    distinct()
)
.subscribe( console.log )


interface Personaje {
    nombre: string;
};


const personajes: Personaje[] =[
    { nombre: 'Megaman'},
    { nombre: 'Zero'},
    { nombre: 'X'},
    { nombre: 'Dr. Willy'},
    { nombre: 'Megaman'},
    { nombre: 'Zero'},
    { nombre: 'X'},
];


from( personajes ).pipe(
    distinct( p => p.nombre )
)
.subscribe( console.log )


