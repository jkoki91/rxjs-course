import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";


const texto = document.createElement('div');
texto.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere lectus lectus, ut placerat nulla maximus sed. In et libero non neque laoreet gravida. Mauris ac dolor ut sapien pulvinar blandit. Phasellus varius magna vitae hendrerit lacinia. Morbi rhoncus, est id vestibulum ornare, ligula quam pretium arcu, in pellentesque urna mi non justo. Nunc interdum interdum suscipit. Quisque ut augue non est gravida congue ac vel massa. In id tellus non erat lobortis rhoncus. Etiam vel interdum quam. Quisque a lacinia lectus, vel fermentum nibh.
    <br/><br/>
    Phasellus sed enim aliquam, molestie elit eu, facilisis est. Nunc rutrum lobortis nulla, et tempor augue malesuada sit amet. Vivamus dictum elementum nunc at scelerisque. Vestibulum erat nunc, convallis eu ornare id, suscipit at arcu. Quisque enim orci, viverra sed feugiat ut, vehicula dapibus lorem. Integer rutrum erat quis elit interdum, dapibus molestie lacus molestie. Donec ullamcorper mauris eget mi vehicula porta. Suspendisse viverra erat quis massa tincidunt, nec venenatis dui varius. Suspendisse interdum dui nec leo pulvinar consectetur. Nunc condimentum massa justo, sit amet luctus erat pellentesque non. Morbi nec odio sed tellus iaculis pellentesque.
    <br/><br/>
    Nam eu enim metus. Quisque ut ipsum vitae nulla commodo ultrices vitae ac ex. Suspendisse faucibus, tortor convallis mollis gravida, nisl dolor ornare elit, non interdum elit ante a felis. Curabitur dapibus laoreet varius. Donec blandit urna a quam placerat elementum. Morbi tincidunt arcu eu lectus pharetra ullamcorper. Duis orci purus, gravida eu ante ac, sodales faucibus ante. Vestibulum massa nibh, gravida posuere tortor vel, tristique porta turpis. Phasellus id erat vitae neque vehicula interdum. Sed vitae mauris luctus, imperdiet tellus vitae, finibus mauris.
    <br/><br/>
    Nam mattis leo at sollicitudin varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris molestie nulla eu risus maximus, quis volutpat nisl iaculis. In euismod, lorem tempus consequat mollis, nunc est facilisis ante, ac ultricies ligula lacus ut mi. Nullam finibus accumsan tortor. Quisque egestas facilisis neque id ultrices. Nullam ut nisi sit amet felis euismod laoreet. Sed non diam nec massa lacinia auctor. Duis finibus enim non nulla dignissim porta. Nullam in placerat lacus. Sed in arcu eget neque vestibulum ultrices. Sed laoreet congue dui, ac malesuada dui commodo ut. Cras dictum, justo quis ornare pulvinar, sem velit cursus est, id finibus urna nisi vel metus. Nullam non nisi eget libero fringilla ornare.
    <br/><br/>
    Cras venenatis sapien non nulla sollicitudin, at semper neque pharetra. Fusce a maximus mauris. In congue fringilla ex, vitae laoreet eros commodo ac. Donec felis felis, mollis et massa in, varius vehicula enim. Nulla tempor, ex a varius imperdiet, augue diam vehicula orci, ac tristique magna eros ac quam. Nullam efficitur elit urna, eu condimentum mi convallis in. Donec sed ultrices felis, eu finibus nibh. Duis tristique massa et nunc maximus vehicula. Nullam placerat nisi est. In dapibus, orci sed pretium vestibulum, orci turpis posuere elit, nec cursus dolor metus eu mi. Integer vitae dolor accumsan, vulputate ex nec, hendrerit dui. Sed id vestibulum elit, eu consequat elit. Praesent quis dolor finibus, gravida risus a, pulvinar nulla. Nunc eu iaculis nisi. Proin consectetur neque nunc, iaculis volutpat nunc feugiat at. Sed consequat, turpis vulputate imperdiet pretium, erat nisl euismod nisl, eget lobortis velit ante ut enim.
`

const body = document.querySelector('body');
body?.appendChild( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body?.append(progressBar);


//funcion que haga el calculo de la barra

const calcularPorcentajeScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
};

// Streams 

const scroll$ = fromEvent( document, 'scroll');


// scroll$.subscribe( console.log )

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event) )
    map( calcularPorcentajeScroll ), //igual que la linea de antes
    tap( console.log )
);

progress$.subscribe( procentaje => {
    progressBar.style.width = `${ procentaje }%`
})





