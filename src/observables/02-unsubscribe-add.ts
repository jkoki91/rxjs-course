import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Siguiente: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
};


const intervalo$ = new Observable<number>( subscriber => {

    //Crear un contador: 1,2,3,4,5.....
    let count = 0;

    const interval = setInterval( () => {
        // cada segundo
        count++;
        subscriber.next( count );
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})

// const subs1= intervalo$.subscribe( num => console.log('Num: ', num));
// const subs2 = intervalo$.subscribe( num => console.log('Num: ', num));
// const subs3 = intervalo$.subscribe( num => console.log('Num: ', num));

const subs1= intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

// subs1.add( subs2 ).add( subs3 ); // Esta manera ya no lo permite rxjs
subs1.add(subs2)
subs1.add(subs1)


setTimeout( () => {
    // subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    subs1.unsubscribe() //Esto es lo mismo que los otros 3 unsubscribe ejuntos

    console.log('Completado timeout');
}, 4000);

