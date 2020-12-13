//FUCK U, I WONT DO THIS AGAIN, I LEARNED SHIT, THIS CAUSED TO ME HEADACHES ALL DAY JUST BY THINKING HOW THE FUCK I WAS SUPOSED TO SAVE THE RESULTS, IF U'RE READING THIS, I HOPE YOU ENJOYED THE PROGRAM, BECAUSE I DIDN'T, HAVE A NICE DAY.
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg=>console.log('Registro Exitoso',reg))
    .catch(err=>console.warm('Error al tratar de registrar el sw',err))
}


//Operandos
let operandoA = 0;
let operandoB = 0;
let operacion = "";
let habilitar = 1;

function init(){
    //variables
    var resultado = document.getElementById("resultado");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var dividir = document.getElementById("dividir");
    var multiplicar = document.getElementById("multiplicar");
    var resta = document.getElementById("resta");
    var suma = document.getElementById("suma");
    var clear = document.getElementById("clear");
    var igual = document.getElementById("igual");
    var guardado = document.getElementById("guardado");
    var limpiarGuardado = document.getElementById("limpiarGuardado");
    var guardarResultado = document.getElementById("guardarResultado");
    var usar = document.getElementById("usar");

    //eventos
    //Numeros
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    //Operadores
    clear.onclick = function(e){
        limpiar();
    }
    dividir.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
        habilitarBotones();
    }
    multiplicar.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
        habilitarBotones();
    }
    resta.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
        habilitarBotones();
    }
    suma.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
        habilitarBotones();
    }
    igual.onclick = function(e){
        operandoB = resultado.textContent;
        limpiar();
        resolver();
        habilitarBotones();
    }
    //la otra tabla
    guardarResultado.onclick = function(e){
        guardado.textContent = resultado.textContent;
    }
    limpiarGuardado.onclick = function(e){
        guardado.textContent = "";
    }
    usar.onclick = function(e){
        resultado.textContent = guardado.textContent;
    }

}
//Funciones para Operadores
function limpiar(){
    resultado.textContent = "";
}
function clear(){
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}
function resolver(){
    let res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
    }
    clear();
    resultado.textContent = res;
    
}

//Guardar y Eliminar Resultados
function habilitarBotones(){
    if (habilitar === 1){
        dividir.disabled=true;
        multiplicar.disabled=true;
        resta.disabled=true;
        suma.disabled=true;
        habilitar--
    }
    else if (habilitar === 0){
        dividir.removeAttribute("disabled");
        multiplicar.removeAttribute("disabled");
        resta.removeAttribute("disabled");
        suma.removeAttribute("disabled");
        habilitar++
    }
}

//I, I DID IT... ITS ACTUALLY WORKING! AFTER SOME DAYS OF HORRIBLE HEADACHES, ITS OVER!
//I MEAN, I WANTED THIS, AFTER ALL, I COULD'VE CHANGED TO DONATION, BUT THIS WAS ONE OF THE WORSE EXPERIENCES I'VE EVER LIVED IN MY LIFE
//BUT NO WORRIES, IT IS ALSO THE LAST ONE. I HOPE THIS CALCULATOR HELPS YOU, BECAUSE IT WONT HELP ME.