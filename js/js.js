function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var comentarios = document.getElementById("comentarios").value;
    
    // Imprimir mensaje de éxito
    document.write("Tu mensaje ha sido enviado con éxito. Gracias por contactarnos.");
    
    // Para fines de demostración, mostramos los datos guardados en la consola
    console.log("Nombre: " + nombre);
    console.log("Correo Electrónico: " + correo);
    console.log("Asunto: " + asunto);
    console.log("Comentarios: " + comentarios);
  }