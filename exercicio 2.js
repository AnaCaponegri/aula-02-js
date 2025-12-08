function classificarIdade(idade) {
    if (idade < 0) {
        return "Idade inválida";
    } else if (idade <= 12) {
        return "Criança";
    } else if (idade <= 17) {
        return "Adolescente";
    } else if (idade <= 64) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

// Testes Exercício 2:
console.log("\n=== EXERCÍCIO 2: Classificação de Idade ===");
console.log(`-5 anos: ${classificarIdade(-5)}`);   
console.log(`8 anos: ${classificarIdade(8)}`);    
console.log(`15 anos: ${classificarIdade(15)}`);   
console.log(`30 anos: ${classificarIdade(30)}`);   
console.log(`70 anos: ${classificarIdade(70)}`);   
