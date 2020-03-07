let factura = {
    nombreEmisor: 'Juan',
    rfcEmisor: 'SDFGHJKIUYTRUH123',
    nombreReceptor: 'Pedro',
    rfcReceptor: '5678Y8IYIU',
    concepto: [
        {nombre:'Pala', cantidad:'3', costoUnitario:79, sku:'8978SD'},
        {nombre:'Metro', cantidad:'2', costoUnitario:90, sku:'fghU89UIjytuf'},
        {nombre:'Pico', cantidad:'1', costoUnitario:200, sku:'SDFHUI'},
        {nombre:'Desarmador', cantidad:'1', costoUnitario:40, sku:'UISDHFIUYSD'},
    ],
    iva: 16
};

/* console.log(factura.concepto[0].nombre);

factura.concepto.forEach(element => {
    console.log(element.nombre);
});
 */

 let subtotal=0;
 let total=0;

 factura.concepto.forEach(element => {
     subtotal += (element.cantidad)*(element.costoUnitario)
});
total= (subtotal*(factura.iva/100)+subtotal);
console.log('SubTotal:', subtotal);
console.log('Total:', total);

let numeros = [7, 8, 9, 10, 2, 1, 0];
console.log(numeros);

//numeros[0]=8;
//console.log(numeros);

let numeroUno = numeros[0]; //7
let numeroDos = numeros[1]; //8
let numeroTres = numeros[2]; //9
let numeroCuatro = numeros[3]; //10
let numeroCinco = numeros[4]; //2
let numeroSeis = numeros[5]; //1
let numeroSiete = numeros[6]; //0

/* if (numeroUno > numeroDos){
    console.log('Es mayor numero uno');
}
else{
    console.log('Es mayor numero dos');
} */

let detener = false;

while(!detener){
    detener=true;
    for (var i = 0; i< numeros.length; i++){
        if (numeros[i] > numeros [i + 1]){
            aux = numeros[i + 1];
            numeros[i+1] = numeros[i];
            numeros[i] = aux;
            detener = false;
        }
    }
}
console.log(numeros);

let numero = [7, 8, 9, 10, 2, 1, 0];

for (let i = 0; i < numero.length-1; i ++){
    for(let j = 0; j<numero.length-1; j++){
        if(numero[j] > numero[j+1]){
            console.log(numero[j]+' es mayor que ' + numero[j+1]);
            aux= numero[j];
            numero[j] = numero[j+1];
            numero[j+1] = aux;
        }
    }
}
console.log(numero);
