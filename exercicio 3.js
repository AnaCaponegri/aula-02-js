function exibirTabuada(numero, ate = 10) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 0; i <= 10; i++) {
        // Usando Template Strings para formatar
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Testes Exercício 3:
console.log("\n=== EXERCÍCIO 3: Tabuada ===");
exibirTabuada(7);