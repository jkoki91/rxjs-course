import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup'); 

const observer = {
    next: val => console.log('next', val)
}

// src1$.subscribe( observer ); Muestra el evento entero

// src1$.subscribe( ev => {
//     console.log(ev.x);
//     console.log(ev.y);
// } );

src1$.subscribe( ({x,y}) => { //Es lo mismo que arriba pero con el objeto deconstruido EMS6
    console.log(x);
    console.log(y);
} );

src2$.subscribe( evento =>{
    console.log(evento.key); // cuando ponemos el tipado <KeyBoardEvent> podemos acceder a la propiedad key
} );

