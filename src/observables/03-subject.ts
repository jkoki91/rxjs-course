import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Siguiente: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
};


const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( 
        () => subs.next( Math.random()), 1000
    );

    return () => {
        clearInterval( intervalID );
        console.log('Intervalo destruido');
    };

});


/**
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );

// Con estos cada observable devuelve un valor distinto
// const subs1 = intervalo$.subscribe( rnd => console.log('Subs1: ', rnd));
// const subs2 = intervalo$.subscribe( rnd => console.log('Subs2: ', rnd));

// Si me suscribo al subject ambos tienen el mismo valor
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer ); 

setTimeout( () => {

    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500)
