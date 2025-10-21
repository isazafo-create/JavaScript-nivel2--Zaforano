// Punto 1: saludo
let sld = "Bienvenido";

function saludo(sld){
    console.log(sld)
}

//Punto 2:Calculando el mayor
let num1, num2;

function calculoMayor(num1, num2){
    num1 = prompt("Ingrese un número");
    num2 = prompt("Ingrese otro número");

    if (num1>num2){
        console.log("El número "+ num1 + " es mayor que "+ num2);
    }
    else{
        if(num2>num1){
            console.log("El número "+ num2 + " es mayor que "+ num1);
        }
        else{
            if(num1=num2){
                console.log("Los números ingresados son iguales");
            }
            else{
                console.log("Los valores ingresados no son válidos");
            }
        }
    }
}

//Punto 3:Sistema de facturación
let monto, total;
let medio,c1,e1,d1,mayor;
c1 = 0.90;
e1 = 0.70;
d1 = 0.80;
mayor = 0.60;

function facturacion(monto, medio, c1, d1, e1, mayor, total){
    monto = parseFloat(prompt("Ingrese el monto del producto"));
    medio = prompt("Ingrese medio de pago: E(efectivo), C(tarjeta de crédito), D(tarjet de débito)");

    if (monto < 200) {
        total = monto;
    } else if (monto >= 200 && monto <= 400) {
        switch (medio) {
            case "E":
                total = monto * e1; 
                break;
            case "D":
                total = monto * d1;
                break;
            case "C":
                total = monto * c1; 
                break;
            default:
                alert("Medio de pago no válido, no se aplicará descuento");
                total = monto;
                break;
        }
    } else if(monto>400) { 
        total = monto * mayor; 
    }

    alert("El monto final a abonar es: $" + total);
    return total;
}

//Punto 4: iteración de array
function IterarArray(array) {
    console.log("iteración de un array");
    for (const elemento of array) {
      console.log(elemento);
    }
}
const frutas = ["manzana", "banana", "pera", "kiwi", "naranja"];
const numeros = [5, 20, 15, 20, 25, 30, 35, 40, 45];
const utiles = ["regla", "lapicera", "lápiz", "goma", "corrector"];
IterarArray(frutas);
IterarArray(numeros);
IterarArray(utiles);

//Punto 5:Lanzamientos de dados
function tirardados(naleatorio){
    let naleatorio = Math.floor(Math.random() * 6) + 1;
    console.log("El numero aleatorio es: " + naleatorio);
}

//Punto 6:Contador de click
let click=0;
function contadorc(click){
    click++;
    console.log("Número de clicks: "+ click);
}

//Punto 7 y 8: manipulación del DOM y cambiando estilos
function manipulardom(){
    const h1 = document.querySelector('h1'); 
    console.log('Texto de inicio', h1.textContent); 
    h1.textContent = 'Estoy agregando un nuevo texto'; 
    const primerParrafo = document.querySelector('p'); 
    primerParrafo.innerHTML = '<span>Estoy aprendiendo a manipular el DOM</span>'; 
    const segundaLista = document.querySelector('#lista2'); 
    console.log('InnerHTML de la segunda lista:', segundaLista.innerHTML); 

    h1.style.backgroundColor = 'yellow'; 
    const subtitulos = document.querySelectorAll('h2'); 
    subtitulos.forEach(h2 => {
        h2.classList.add('subtitulos');
    }); 
    const elementosConEstilo = document.querySelectorAll('.estilo-letras'); 
    elementosConEstilo.forEach(el => {
        el.classList.remove('estilo-letras');
    }); 
}

//Punto 9: manipular el DOM de un botón a partir de un evento
const boton = document.getElementById("punto9");

boton.addEventListener('click', () => {
  boton.textContent = 'Desactivado'; //cambia el texto
});

boton.addEventListener('mouseenter', () => {
  boton.style.backgroundColor = 'green'; //cuando pongo el mouse cambia color
});

boton.addEventListener('mouseleave', () => {
  boton.style.backgroundColor = 'red';
});


//Punto 10: mostrar los datos introducidos en un formulario al usuario
function mostrarDatos() {
    const inputUsuario = document.querySelector('#usuario');
    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
  
    const valorUsuario = inputUsuario.value;
    const valorNombre = inputNombre.value;
    const valorEmail = inputEmail.value;
  
    const mensaje = `Estos fueron los datos ingresados:
    Usuario: ${valorUsuario}
    Nombre: ${valorNombre}
    Mail: ${valorEmail}`;
  
    alert(mensaje);
}

//Punto 11: Creando y consultando un objeto con DOM
const toDoList = {
    "tipo de tarea" : "compras",
    dia : "Lunes",
    productos : ["Huevos", "Harina", "Servilletas", "Pan"],
    "cantidad de productos" : 4,
    estado : "pendiente",
    notificacion: function() {
        alert("Esta tarea tiene una prioridad urgente!");
    }
};
function punto11(toDoList) {
    console.log("Día de la compra: ", toDoList.dia);
    console.log("Tipo de tarea: ", toDoList["tipo de tarea"]);
    console.log("Cantidad de productos: ", toDoList["cantidad de productos"]);
    toDoList.notificacion();
}

//Punto 12: Consultando valores
const superHeroes ={
    "squadName" : "Super Hero Squad", "homeTown" : "Metro City", "formed" : 2016,
    "secretBase" : "Super tower", "active" : true,
    "members" : [
    {
    "name" : "Molecule Man", "age" : 29,
    "secretIdentity" : "Dan Jukes", "powers" : [
    "Radiation resistance", "Turning tiny", "Radiation blast"
    ]
    },
    {
    "name" : "Madame Uppercut", "age" : 39,
    "secretIdentity" : "Jane Wilson", "powers" : [
    "Million tonne punch", "Damage resistance", "Superhuman reflexes"
    ]
    }
    ]
    }