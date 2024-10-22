const enlace = document.getElementById('enlace');
const lista = document.getElementById('lista');


function Ejercicio2() {

    const opinionUsuario = prompt('Danos tu opinion manin');
    lista.innerHTML += opinionUsuario;

    console.log(opinionUsuario);
}