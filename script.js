// ================================
// ELEMENTOS
// ================================

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const counterButton = document.getElementById("counterButton");

const music = document.getElementById("music");

const letterText = document.getElementById("letterText");

// ================================
// CARTA
// ================================

const carta = `Bueno, mi querida.

Te hice este pequeño detalle para nuestro mesiversario. Sé que no he sido un gran novio ni muy amoroso durante las últimas semanas, pero quería hacer este pequeño regalo para que recordaras cuánto tiempo ha pasado desde que estamos juntos y para que pienses en todas las cosas que hemos vivido.

Si todo sale bien, mientras lees esta carta estará sonando una canción de fondo que nos gusta mucho. Cada vez que la escucho, inevitablemente pienso en ti.

Quiero que abras esta página cada vez que te sientas triste o cuando sientas que estás sola. Quiero que te recuerde cuánto te amo y que, aunque a veces no sea el mejor demostrando mis sentimientos, siempre trato de hacerme un espacio para darte algo, aunque sea pequeño, porque verte feliz siempre vale la pena.

Perdón por no ser tan amoroso, mi gordita de nata. Pero quiero que quede grabado en tu corazón que te amo y te adoro para toda la eternidad.

Al final de esta página verás un contador. Ese contador muestra el tiempo exacto desde el momento en que nos hicimos pareja; el instante preciso en el que mi vida cambió para bien. Desde entonces me has regalado experiencias, risas y esos sentimientos tan extraños que hoy puedo reconocer con una sola palabra: amor.

Muchas gracias por estar para mí.

Muchas gracias por ser la luz de mis ojos.

Muchas gracias por convertirte en mi rayito de luna.

Con todo mi amor,

Tu rayito de sol ❤️`;

// ================================
// CAMBIO DE ESCENAS
// ================================

function mostrarEscena(escena){

    document.querySelectorAll(".scene").forEach(s=>{

        s.classList.remove("active");

    });

    escena.classList.add("active");

}

// ================================
// ESCRIBIR CARTA
// ================================

function escribirCarta(){

    letterText.innerHTML="";

    continueButton.style.display="none";

    const palabras=carta.split(" ");

    let i=0;

    const velocidad=140;

    function escribir(){

        if(i<palabras.length){

            letterText.innerHTML+=palabras[i]+" ";

            i++;

            letterText.scrollTop=letterText.scrollHeight;

            setTimeout(escribir,velocidad);

        }else{

            continueButton.style.display="inline-block";

        }

    }

    escribir();

}

// ================================
// BOTÓN COMENZAR
// ================================

startButton.addEventListener("click",()=>{

    music.play();

    mostrarEscena(scene2);

    escribirCarta();

});

// ================================
// CONTINUAR
// ================================

continueButton.addEventListener("click",()=>{

    mostrarEscena(scene3);

});

// ================================
// VER CONTADOR
// ================================

counterButton.addEventListener("click",()=>{

    mostrarEscena(scene4);

});

// ================================
// CONTADOR
// ================================

const inicio = new Date(2023,4,12,0,10,0);

function actualizarContador(){

    const ahora = new Date();

    let años = ahora.getFullYear() - inicio.getFullYear();
    let meses = ahora.getMonth() - inicio.getMonth();
    let dias = ahora.getDate() - inicio.getDate();

    if(dias < 0){

        meses--;

        const ultimoMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        );

        dias += ultimoMes.getDate();

    }

    if(meses < 0){

        años--;

        meses += 12;

    }

    const diferencia = ahora - inicio;

    const segundosTotales = Math.floor(diferencia/1000);

    const segundos = segundosTotales % 60;

    const minutos = Math.floor(segundosTotales/60)%60;

    const horas = Math.floor(segundosTotales/3600)%24;

    document.getElementById("years").textContent = años;
    document.getElementById("months").textContent = meses;
    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);