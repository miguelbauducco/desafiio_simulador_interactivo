let cuotas = parseInt(prompt("Ingrese cantidad de cuotas: "));
let precio = parseInt(prompt("Ingrese precio del producto: "));
let precioFinal;


function calculadoraDeCuotas(cantidadDeCuotas,monto,total){

        switch(cantidadDeCuotas){
            case 3: 
            total=parseInt(monto/3);
            break;

            case 6: 
            total=parseInt(monto/6);
            break;

            case 12: 
            total=parseInt(monto/12);
            break;

            case 18: 
            total=parseInt(monto/18);
            break;

            case 24: 
            total=parseInt(monto/24);
            break;

            default:
            return 0;
    }

return total;
}
console.log("Debe abonar "+cuotas+" de ");
console.log(calculadoraDeCuotas(cuotas,precio,precioFinal));




