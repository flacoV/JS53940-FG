
//Funcion para guardar
function cotizador(ancho, largo, tela) {
    let manoDeObra = 10000; 
    let precio;

    
    //Utilizo condicional para aplicar el descuento y para los precios segun el largo de la tela.
    if (ancho <= 150) {  
        precio = manoDeObra - 3500;
     } else {
         precio = manoDeObra;
     }  


    if (largo <= 100) {
        precio += 3000;
    } else if (largo <= 150) {
        precio += 4150;
    } else if (largo <= 220) {
        precio += 6100;
    } else if (largo <= 300) {
        precio += 9000;
    } else {
        precio += 15000;
    }


    //Utilizo switch para aplicar las distintas opciones de tela y sus precios.
    switch (tela.toLocaleLowerCase()) {
        case "blackout":
            precio += 45000;
            break;
        case "screen":
            precio += 57000;
            break;
        case "lino":
            precio += 20000;
            break;
        
        default:
            console.log("No comercializamos esa tela");
            break;
    }

    return precio;

    

}



let welcome = alert('Somos RollTech, presupueste su cortina roller en menos de 5 minutos!!!');
let userName = prompt('Ingrese su nombre para una experiencia personalizada');
let discAlert = alert(`Bienvenido ${userName}, recuerda que hay un descuento del 35% en cortinas de 150cm o menos de ancho`);
let ancho = parseInt(prompt('Ingrese el ancho de su cortinar en centimetros (cm)'));
let largo = parseInt(prompt('Ingrese el largo de la tela en centimetros (cm)'));
let tela = prompt('Ingrese el nombre de la tela - (BlackOut - Screen - Lino)');
let cotizacion = cotizador(ancho, largo, tela);

console.log(`Cotizacion para ${userName}, medidas de la cortina (${ancho}cm x ${largo}cm) en tela ${tela} valor total= $${cotizacion}`);
alert(`La cotizacion para ${userName} es $${cotizacion}. ¡Gracias por utilizar nuestros servicios!`);


//Aplico un ciclo para enviar un mensaje a la consola avisando que se aplico el descuento al presupuesto hecho en el momento.
do {
    if (ancho <= 150) {
        console.log(`Se ha aplicado el descuento del 35% correctamente al presupuesto de ${userName}`);
    }
} while (false);