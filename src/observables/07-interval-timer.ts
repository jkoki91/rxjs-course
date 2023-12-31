import { interval, timer } from 'rxjs';


const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete: '),
}

const hoyEn5 = new Date(); //Ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); //empiza un interval de 1 seg en el instante 2 segs
const timer$ = timer( hoyEn5 ); //para progamar en un tiempo


console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('fin');



