
//Declaro la funcion letras para validar si el string contiene solo letras y espacios en blanco, utilizo la expresion (/^[A-Za-z\s]+$/ y /^[0-9]+$/) para validar las cadenas de texto, seguida de un .test que aplica a texto dando true o false segun respete el patron anteriormente especificado y repito el mismo proceso pero no la funcion numeros
function letras(texto) {
    return /^[A-Za-z\s]+$/.test(texto);
}

function numeros(texto) {
    return /^[0-9]+$/.test(texto);
}

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


//Declaro la variable userName pero no la defino, agrego el prompt en un bucle (do-while) llamando a la funcion letras
let userName;
do {
    userName = prompt('Ingrese su nombre para una experiencia personalizada');
} while (!letras(userName));


alert(`Bienvenido ${userName}, recuerda que hay un descuento del 35% en cortinas de 150cm o menos de ancho`);


//Utilizo el mismo tipo de bucle que para userName solo que en el while agrego un .toString() para que el codigo lo lea como un numbre y no string tambien sume un el opreador avanzado para tambien condicionar el minimo de cada medida y asi acorte codigo.
let ancho;
do {
    ancho = parseInt(prompt('Ingrese el ancho de su cortinar en centimetros (cm)'));
    if ( ancho < 50 ) {
        alert('El ancho debe ser de al menos 50 cm. Porfavor, ingrese un valor valido');
    }
} while (!numeros(ancho.toString()) || ancho < 50);

let largo;
do {
    largo = parseInt(prompt('Ingrese el largo de la tela en centimetros (cm)'));
    if ( largo < 100) {
        alert('El largo debe ser de al menos 100cm. Porfavor ingrese un valor valido');
    }
} while (!numeros(largo.toString()) || largo < 100);


//Declaro la variable tela (undefined) y la variable telStock le asigno un valor de false y dentro del ciclo aplico la misma logica utilizada para el ancho y largo solo que lo condiciono con los nombres de las telas, para asi ejecutar el bucle siempre y cuando sea true.
let tela;
let telaStock = false;
do {
    tela = prompt('Ingrese el nombre de la tela - (BlackOut - Screen - Lino)');

    if (tela.toLocaleLowerCase() === 'blackout' || tela.toLocaleLowerCase() === 'screen' || tela.toLocaleLowerCase() === 'lino') {
        telaStock = true;
    } else {
        alert('Por favor, ingrese una tela válida (BlackOut, Screen, Lino).');
    }
} while (!telaStock);

let cotizacion = cotizador(ancho, largo, tela);

console.log(`Cotizacion para ${userName}, medidas de la cortina (${ancho}cm x ${largo}cm) en tela ${tela} valor total= $${cotizacion}`);

alert(`La cotizacion para ${userName} es $${cotizacion}. ¡Gracias por utilizar nuestros servicios!`);


//Aplico un ciclo para enviar un mensaje a la consola avisando que se aplico el descuento al presupuesto hecho en el momento.
do {
    if (ancho <= 150) {
        console.log(`Se ha aplicado el descuento del 35% correctamente al presupuesto de ${userName}`);
    }
} while (false);
