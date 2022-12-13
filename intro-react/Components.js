// Class Test.js
import React from 'react';

class Test extends React.Component {
    render(){
        return (
            <h1>Class Component Test</h1>
        )
    }
}

/* React.createElement('h1', 'Class Component Test')

let x = document.createElement('h1');
let y = document.createTextNode('Class Component Test');
x.appendChild(y); */


// Function Test.js
function Test(){
    return (
        <h1>Function Component Test</h1>
    )
}


// Herencia, Encapsulamiento, Polimorfismo, Abstraccion

class Persona {
    nombre = "";
    apellido = "";
    edad = 0;

    nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

class Estudiante extends Persona {
    grado = "5to"

    nombreCompleto = function(){
        return "Estudiante: " + this.nombre + " " + this.apellido;
    }
}

class Profesor extends Persona {
    materia = "matematica"
}

/* let person = {
    nombre: '',
    apellido: '',
    edad: 0,

    nombreCompleto: function(){

    }
}

person.nombre = 'Mariandris' */


let p1 = new Persona();
p1.nombre
let p2 = new Persona();

let obj1 = new Object();
obj1.nombre = 'Luis';
console.log(ob1);
let nombre = new String();

