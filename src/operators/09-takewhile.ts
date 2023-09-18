import { fromEvent, map, takeWhile } from "rxjs";



const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    map( ({ x, y }) => ({ x, y })),
    takeWhile( ({ y }) => y <= 150, true ) // el true es para que en el complete diga tambien las cordenadas, si no solo dice complete
)
.subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
})




