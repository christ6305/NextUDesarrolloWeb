
var Usuario = {
  nombreCompleto: "",
  nombreUsuario: "",
  contrasena: "",
  email: "",
  fechaNacimiento: "",
  descripcion: "",
  suscripcion: "",
  ciudad: "",
  direccion: "",
  telefono: "",
  celular: "",
  nacionalidad: "",
  masculino: false,
  femenino: false,
  efectivo: false,
  credito: false,
  imprimirDatos: function(){
    console.log("Nombre completo: "+this.nombreCompleto);
    console.log("Nombre de usuario: "+this.nombreUsuario);
    console.log("Email: "+this.email);
    console.log("Fecha de nacimiento: "+this.fechaNacimiento);
    console.log("Descripcion: "+this.descripcion);
    console.log("Telefono: "+this.telefono);
    console.log("Celular: "+this.celular);
    console.log("Nacionalidad: "+this.nacionalidad);
    console.log("Es masculino: "+this.masculino);
    console.log("Es femenino: "+this.femenino);
    console.log("Efectivo: "+this.efectivo);
    console.log("Credito: "+this.credito);
  }

}

document.getElementById('submit').addEventListener("click", function(){
  Usuario.nombreCompleto = document.getElementsByClassName('nombre')[0].value;
  Usuario.nombreUsuario = document.getElementsByClassName('nombre_usuario')[0].value;
  Usuario.contrasena = document.getElementsByClassName('password')[0].value;
  Usuario.email = document.getElementsByName('email')[0].value;
  Usuario.fechaNacimiento = document.getElementsByName('fecha_nacimiento')[0].value;
  Usuario.ciudad = document.getElementsByName('ciudad_residencia')[0].value;
  Usuario.descripcion = document.getElementsByTagName('textarea')[0].value;
  Usuario.suscripcion = document.getElementsByTagName('select')[0].value;
  Usuario.direccion = document.querySelector("input[name='direccion']").value;
  Usuario.telefono = document.querySelector("input[type='tel']").value;
  Usuario.celular = document.querySelectorAll("input[type='tel']")[1].value;
  Usuario.nacionalidad = document.querySelectorAll("input[name='nacionalidad']")[0].value;
  Usuario.masculino = document.getElementById('masculino').checked;
  Usuario.femenino = document.getElementById('femenino').checked;
  Usuario.efectivo = document.getElementById('efectivo').checked;
  Usuario.credito = document.getElementById('credito').checked;

  Usuario.imprimirDatos();

})
