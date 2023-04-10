/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
 */

function esPar(numero) {
    if(numero % 2 === 0){
    console.log(numero + " Es Par")
    } else{
        console.log(numero + " Es Impar")
        console.log(`${numero} es impar`)
    }
}

esPar(2)
esPar(3) 

/* 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. */

function encontrarMayor (numero1, numero2) {
    if (numero1 > numero2)  {
        console.log(numero1 + " Es mayor que " + numero2);    
    } else if (numero2 > numero1) {
        console.log(numero2 + " Es mayor que " + numero1);  
    } else {
        console.log(numero1 + " Y " + numero2 + " Son iguales ");
    }
}
encontrarMayor(4, 1)
encontrarMayor(5,10)
encontrarMayor(5,5)

/* 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
*/

function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " Es multiplo de 5");
    } else {
        console.log(numero + " No es multiplo de 5");
    }
}
esMultiploDeCinco(10)
esMultiploDeCinco(7)

/* 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
 */

function imprimirNumeros(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
    imprimirNumeros(8)

/*     5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado. */

function imprimirPaCan(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++){
        console.log(palabra);
    }
}
imprimirPaCan("Hola", 2)

/* 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. */

function imprimirArray(arr) {
    arr.map((valor) => {
        console.log(valor);
    });
}
imprimirArray([1, 9, 2, 1])

/* 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. */

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function imprimirArrayMenosQuinto (array) {
    for (let i = 0; i < array.length; i++)
    if (i !== 4) {
        console.log(array[i]);
    }
}

imprimirArrayMenosQuinto(miArray)

/* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. */

const miArray2 = [2, 4, 6, 8]
const miNumero = 4; 

function imprimirArrayPorNumero (array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}

imprimirArrayPorNumero (miArray2, miNumero)