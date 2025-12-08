/* =========================================
EXERCÍCIO 4: CONTADOR DE PARES E ÍMPARES
=========================================
*/

function contarParesImpares(numeros) {
    let contagem = {
        pares: 0,
        impares: 0
    };

    // Usando loop for...of para interar o array
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            contagem.pares++;
        } else {
            contagem.impares++;
        }
    }

    return contagem;
}

// Testes Exercício 4:
console.log("\n=== EXERCÍCIO 4: Pares e Ímpares ===");
console.log(contarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(contarParesImpares([2, 4, 6, 8])); 
console.log(contarParesImpares([1, 3, 5, 7, 9])); 