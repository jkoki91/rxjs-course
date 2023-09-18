import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>( document, 'click')



click$.pipe(
    tap<MouseEvent>( () => console.log('tap') ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }) ),
    map( ({clientX, clientY}) => ({clientY, clientX }) ), // lo mismo que la lo de arriba
    // first<MouseEvent>( event => event.clientY >= 150 )
    first( event => event.clientY >= 150 ) // ya no ponemos el mouseEvent porque ya no emitimos ese objeto
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})






