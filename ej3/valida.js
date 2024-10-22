function validajs() {
    const dni = document.getElementById("dni").value;   
    const letra = document.getElementById("letra").value;   
    const email = document.getElementById("email").value;    
    const nombre = document.getElementById("nombre").value;    
    const apellidos = document.getElementById("apellidos").value;    

    
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formatoDNI = /^\d{8}$/;

    if (nombre === "" || apellidos === "") {
        console.log("El nombre y los apellidos son obligatorios.");
        return;
    }

    if (!formatoDNI.test(dni)) {
        console.log("Teclea un DNI (Sin letras, solo nmeros).");
        return;
    }

    const letrasDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    const resto = parseInt(dni) % 23;
    const letraCorrecta = letrasDni[resto];

    if (letra !== letraCorrecta) {
        console.log("La letra del NIF es incorrecta.");
        return;
    }

    if (!formatoEmail.test(email)) {
        console.log("Introduce un correo electrónico válido.");
        return;
    }

    console.log("Formulario válido");
}
