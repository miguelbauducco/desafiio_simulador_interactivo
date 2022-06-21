let cuotas;
let precio;
let precioFinal;


function calculadoraDeCuotas(c,p,total){

        switch(c){
            case 3: 
            total=p/c;
            break;

            case 6: 
            total=p/6;
            break;

            case 12: 
            total=p/12;
            break;

            case 18: 
            total=p/18;
            break;

            case 24: 
            total=p/24;
            break;

            default:
            return 0;
            break;

    }


console.log("Usted debe abonar "+c+" cuotas de");
return total;
}


calculadoraDeCuotas(cuotas,precio,precioFinal);
console.log(calculadoraDeCuotas(22, 1800)+" pesos.");



