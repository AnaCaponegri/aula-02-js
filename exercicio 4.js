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