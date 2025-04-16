let numeros = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
let tamanho = numeros.length;

for (let i = 0; i < numeros.length - 1; i++){
    for (let j = 0; j < tamanho - 1 - i; j++) {

        if(numeros[j] > numeros[j + 1]){

            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }

    }
}

console.log(numeros);
