//Mi simulador es un e-commerce donde se venden accesos para festivales de musica electronica 


let moneda = parseInt (prompt ("Seleccione el numero del tipo de moneda a utilizar \n 1.- Mxn \n 2.- Dolares \n 3.- Euros"))
let cantidad = 0
let seleccionarFestival = 0
let nombreCompleto = ""
let iva = 0
let total = 0

const nombre = () => {
    nombreCompleto = prompt ("Ingrese su nombre completo")
    alert ( `Hola ${nombreCompleto}, bienvenido a ElectronicLife`)
}

const festival = () => {
    alert ("Cada paquete incluye: \n - Un acceso general al evento \n - Vuelo \n - 3 noches de hotel (A excepción de Burning Man)")
    seleccionarFestival = parseInt (prompt("Ingrese el numero del festival al que desea asistir \n 1.- EDC México \n 2.- Tomorrowland \n 3.- Burning Man \n 4.- EDC Las Vegas"))
}

switch (moneda) {
    case 1:
        nombre()
        festival() 
        if (seleccionarFestival == 1){
            alert ("El costo del paquete para EDC México es de $15,000 Mxn c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (15000 * cantidad) * 0.16
            total = (15000 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para EDC México es de: $${total} Mxn, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 2){
            alert ("El costo del paquete para Tomorrowland es de $50,000 Mxn c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (50000 * cantidad) * 0.16
            total = (50000 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para Tomorrowland es de: $${total} Mxn, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 3){
            alert ("El costo del paquete para Burning Man es de $61,000 Mxn c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (61000 * cantidad) * 0.16
            total = (61000 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para Burning Man es de: $${total} Mxn, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 4){
            alert ("El costo del paquete para EDC Las Vegas es de $40,000 Mxn c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (40000 * cantidad) * 0.16
            total = (40000 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para EDC Las Vegas es de: $${total} Mxn, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else{
            alert("Ingrese un numero de la lista")
        }
        break;

    case 2:
        nombre()
        festival() 
        if (seleccionarFestival == 1){
            alert ("El costo del paquete para EDC México es de $777.73 Dolares c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (777.73 * cantidad) * 0.16
            total = (777.73 * cantidad) + iva 
            alert (`El total de su compra por ${cantidad} paquetes para EDC México es de: $${total.toFixed(2)} Dolares, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 2){
            alert ("El costo del paquete para Tomorrowland es de $2592.42 Dolares c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (2592.42 * cantidad) * 0.16
            total = (2592.42 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para Tomorrowland es de: $${total.toFixed(2)} Dolares, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 3){
            alert ("El costo del paquete para Burning Man es de $3162.75 Dolares c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (3162.75 * cantidad) * 0.16
            total = (3162.75 * cantidad) + iva 
            alert (`El total de su compra por ${cantidad} paquetes para Burning Man es de: $${total.toFixed(2)} Dolares, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 4){
            alert ("El costo del paquete para EDC Las Vegas es de $2073.94 Dolares c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (2073.94 * cantidad) * 0.16
            total = (2073.94 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para EDC Las Vegas es de: $${total.toFixed(2)} Dolares, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else{
            alert("Ingrese un numero de la lista")
        }
        break;

    case 3:
        nombre()
        festival() 
        if (seleccionarFestival == 1){
            alert ("El costo del paquete para EDC México es de 708.20€ Euros c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (708.20 * cantidad) * 0.16
            total = (708.20 * cantidad) + iva 
            alert (`El total de su compra por ${cantidad} paquetes para EDC México es de: ${total.toFixed(2)}€ Euros, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 2){
            alert ("El costo del paquete para Tomorrowland es de 2362.67€ Euros c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (2362.67 * cantidad) * 0.16
            total = (2362.67 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para Tomorrowland es de: ${total.toFixed(2)}€ Euros, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 3){
            alert ("El costo del paquete para Burning Man es de 2882.46€ Euros c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (2882.46 * cantidad) * 0.16
            total = (2882.46 * cantidad) + iva 
            alert (`El total de su compra por ${cantidad} paquetes para Burning Man es de: ${total.toFixed(2)}€ Euros, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 4){
            alert ("El costo del paquete para EDC Las Vegas es de 1890.14€ Euros c/u")
            cantidad = parseInt (prompt("Ingrese la cantidad de boletos que desea comprar"))
            iva = (1890.14 * cantidad) * 0.16
            total = (1890.14 * cantidad) + iva
            alert (`El total de su compra por ${cantidad} paquetes para EDC Las Vegas es de: ${total.toFixed(2)}€ Euros, iva incluido`) 
            alert (`Gracias por tu compra ${nombreCompleto}`)
        }
        else{
            alert("Ingrese un numero de la lista")
        }
        break;

    default:
        break;
}