

//Funcion para guardar
function cotizador(ancho, largo, tela) {
    let manoDeObra = 10000; 
    let precio;
    //Array de precio segun el largo de la tela
    const precioLargo = [0, 3000, 4150, 6100, 9000, 15000];

    
    //Utilizo condicional para aplicar el descuento y para los precios segun el largo de la tela.
    if (ancho <= 150) {  
        precio = manoDeObra - 3500;
     } else {
         precio = manoDeObra;
     }  


    if (largo <= 100) {
        precio += precioLargo[1];
    } else if (largo <= 150) {
        precio += precioLargo[2];
    } else if (largo <= 220) {
        precio += precioLargo[3];
    } else if (largo <= 300) {
        precio += precioLargo[4];
    } else {
        precio += precioLargo[5];
    }

    //Creo un array e ingreso las telas y con sus respectivos nombres y precios
    const telas = [
        {nombre: "screen", precio: 57000},
        {nombre: "blackout", precio: 45000},
        {nombre: "lino", precio: 20000},
    ]

    // Busco dentro del array de telas si lo ingresado por el usuario es correcto.
    const tipoDeTela = telas.find(
        (t) => t.nombre.toLowerCase() ===  tela.toLowerCase()
    );

    //Utilizo un condicional y le digo al programa basicamente que si el find encontro un objeto dentro
    //del array(telas) que fue ingresado por el cliente que le sume el precio de la tela a lo ya
     // calculado segun las medidas ingresadas anteriormente.
    if (tipoDeTela) {
        precio += tipoDeTela.precio;
    } else {
        alert("Lo siento!, Estas ingresando una tela no valida o no disponible en este momento.")
    }

    return precio;


}


alert('Somos RollTech, presupueste su cortina roller en menos de 5 minutos!!!');
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

if (ancho < 50, largo < 100) {
    alert("Porfavor ingrese una medida valida");
}