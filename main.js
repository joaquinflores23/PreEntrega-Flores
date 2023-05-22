// Variables, Constantes y Objetos

// Para productos

class productos {
    constructor(marca, nombre, codigo, edad, precio) {
        this.marca = marca;
        this.nombre = nombre;
        this.codigo = codigo;
        this.edad = edad;
        this.precio = precio;
    }
}

const prod1 = new productos ("Scapa", "The Orcadian", 1, 16, 24000 );
const prod2 = new productos ("The Balvenie", "GoldenCask", 2, 14, 22500 );
const arrayProductos = [];
arrayProductos.push(prod1);
arrayProductos.push(prod2);

// Para usuarios

class usuarios{
    constructor(usuario, contraseña){
      this.usuario = usuario;
      this.contraseña = contraseña;
    }
}


const usuario1 = new usuarios("joaquin23","admin01");
const usuario2 = new usuarios("alejandro11","admin02");
const usuario3 = new usuarios("luciano04","admin03");
const arrayUsuarios = [];
arrayUsuarios.push(usuario1);
arrayUsuarios.push(usuario2);
arrayUsuarios.push(usuario3);

// Funciones

// funcion para iniciar sesion

function inicioSesion() {
    let imputUsuario = prompt("Ingrese el usuario");
    let imputContaseña = (prompt("Ingrese la contraseña"));
    let inicio = arrayUsuarios.find((usuarioInit) => usuarioInit.usuario === imputUsuario && usuarioInit.contraseña === imputContaseña);
    
    if (inicio) {
        alert("Ingreso exitoso");
    } else {
        alert("Usuario y/o contraseña incorrectos")
        inicioSesion()
    }
}

// Funciones del menu


function menu() {
    let opciones = parseInt(prompt(
        " Seleccione una de las siguientes opciones: \n \n 1)Agregar administradoes \n 2)Buscar administradoes \n 3)Eliminar administradores \n 4)Agregar productos \n 5)Buscar productos \n 6)Eliminar productos \n 7)Salir")
    );
    return opciones;
  }

// funcion despedida

function salir() {
    alert(
      "Usted a salido del menu de administradores"
    );
  }

// Funciones para Usuarios


// agregar usuarios

function addUsuarios() {
    let usuario = prompt("Ingresar nombre de usuario");
    let contraseña = prompt("Ingresar contraseña");
    let nuevoUsuario = new usuarios(usuario, contraseña);
    arrayUsuarios.push(nuevoUsuario);

    let mensaje = `Usuario #${usuario} ingresado correctamente`;
    alert(mensaje);
}


// buscar usuarios

function findUsuarios() {
    let findUsuario = prompt("Ingrese el nombre del usuario que desea buscar");
    let busqueda = arrayUsuarios.find((usuairoBuscado) => usuairoBuscado.usuario.includes(findUsuario));

    if (busqueda) {
        let mensaje = `
        Usario encontrado!

        Nombre: ${busqueda.usuario}
        Contraseña: ${busqueda.contraseña}
        `;
        alert(mensaje);
      } else {
        alert("Usuario no encontrado");
        findUsuarios();
      }
    
}


// eliminar usuarios

function delUsuarios() {
    let delUsuario = prompt("Ingrese el usuario que desea eliminar");
    let eliminar = arrayUsuarios.find((usuarioEliminar) => usuarioEliminar.usuario === delUsuario);

    if (eliminar) {
        let indexUsuarios = arrayUsuarios.indexOf(eliminar);
        arrayUsuarios.splice(indexUsuarios, 1);

        let mensaje = `Usuario ${eliminar.usuario} eliminado correctamente`;
        alert(mensaje);
    } else {
        alert("El usuario no está en la base de datos.");
        delUsuarios();
    }
}


// Funciones para Productos


// agregar productos

function addProductos() {
    let marca = prompt("Ingresar marca");
    let nombre = prompt("Ingresar nombre");
    let codigo = parseInt(prompt("Ingrese nuevo codigo"));
    let edad = parseInt(prompt("Ingrese edad"));
    let precio = Number(prompt("Ingrese precio"));
    let nuevoProducto = new productos(marca, nombre, codigo, edad, precio);
    arrayProductos.push(nuevoProducto);

    let mensaje = `Producto #${codigo} ingresado correctamente`;
    alert(mensaje);
}


// buscar producto

function findProductos() {
    let findProducto = parseInt(prompt("Ingrese el codigo del producto que desea buscar"));
    let busqueda = arrayProductos.find((productoBuscado) => productoBuscado.codigo === findProducto);

    if (busqueda) {
        let mensaje = `
        Producto encontrado!

        Marca : ${busqueda.marca}
        Nombre : ${busqueda.nombre}
        Codigo : ${busqueda.codigo}
        Edad : ${busqueda.edad}
        Precio : ${busqueda.precio}
        `;
        alert(mensaje);
      } else {
        alert("Producto no encontrado");
        findProductos();
      }
    
}


// eliminar productos

function delProductos() {
    let delProducto = parseInt(prompt("Ingrese el codigo de producto que desea eliminar"));
    let eliminar = arrayProductos.find((productoEliminar) => productoEliminar.codigo === delProducto);

    if (eliminar) {
        let indexProductos = arrayProductos.indexOf(eliminar);
        arrayProductos.splice(indexProductos, 1);

        let mensaje = `Producto ${eliminar.codigo} eliminado correctamente`;
        alert(mensaje);
    } else {
        alert("El producto no está en la base de datos.");
        delProductos();
    }
}

// modificar precio producto (no me sale sin modificar todos los datos del objeto)

// function modPrecioProductos(){
//     let imputNroProducto = parseInt(prompt("Ingrese el codigo del producto al que desea modificar el precio"));
//     let producto = arrayProductos.find((codigoProd) => codigoProd.codigo === imputNroProducto);
//     let indexProd = arrayProductos.indexOf(producto.precio);
//     let nuevPrecio = Number(prompt("Ingrese nuevo precio"));
//     arrayProductos.splice(indexProd, 1,nuevPrecio )
//     console.log(arrayProductos)
// }



// Inicio del programa

alert("Bienvenido al menu para administradores");

let inicioUsario = inicioSesion();


if(inicioUsario){

    let menuGral = menu();
    switch(menuGral) {
        case 1:
            addUsuarios();
            break;
            
        case 2:
            findUsuarios();
            break;

        case 3:
            delUsuarios();
            break;

        case 4:
            addProductos();
            break;

        case 5:
            findProductos();
            break;
        
        case 6:
            delProductos();
            break;

        case 7:
            salir();
            break;
    }

}

