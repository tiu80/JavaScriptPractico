const lista1 = [1,2,3,1,3,3,5,1,3];

const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{

            lista1Count[elemento] = 1;
        }
    }
);

lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado,nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length -1];
