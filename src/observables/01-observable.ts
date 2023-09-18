import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
};

// const obs$ = Observable.create(); //Esto ya no se utiliza
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //Forzamos un error
    // const a = undefined;
    // a.nombre = 'Jorge';

    subs.complete();

    //Esto ya no se ejecuta porque va despues del complete
    subs.next('Hola');
    subs.next('Mundo');
});

// obs$.subscribe( console.log );
// obs$.subscribe( resp => { //esto es lo mismo de arriba
//     console.log(resp);
// });

// obs$.subscribe(
//     valor => console.log('Next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );

obs$.subscribe( observer );





