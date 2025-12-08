
/* =========================================
EXERCÍCIO 2: CLASSIFICAÇÃO DE IDADE
=========================================
*/

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


/* =========================================
EXERCÍCIO 3: TABUADA
=========================================
*/

// Adicionei o parâmetro opcional 'ate' conforme o desafio extra
function exibirTabuada(numero, ate = 10) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= ate; i++) {
        // Usando Template Strings para formatar
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Testes Exercício 3:
console.log("\n=== EXERCÍCIO 3: Tabuada ===");
exibirTabuada(7);


/* =========================================
EXERCÍCIO 4: CONTADOR DE PARES E ÍMPARES
=========================================
*/

function contarParesImpares(numeros) {
    let contagem = {
        pares: 0,
        impares: 0
    };

    // Usando loop for...of para iterar o array
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


/* =========================================
EXERCÍCIO 5: VALIDADOR DE SENHA (BÔNUS)
=========================================
*/

function validarSenha(senha) {
    // 1. Verifica tamanho mínimo
    if (senha.length < 8) return false;

    // 2. Verifica letra minúscula (se a senha for igual a ela toda maiúscula, não tem minúscula)
    const temMinuscula = senha !== senha.toUpperCase();
    
    // 3. Verifica letra maiúscula (se a senha for igual a ela toda minúscula, não tem maiúscula)
    const temMaiuscula = senha !== senha.toLowerCase();

    // 4. Verifica número (usando Regex simples para encontrar dígitos)
    const temNumero = /[0-9]/.test(senha);

    // Retorna true apenas se todas as condições forem verdadeiras
    return temMinuscula && temMaiuscula && temNumero;
}

// Testes Exercício 5:
console.log("\n=== EXERCÍCIO 5: Validador de Senha ===");
console.log(`Abc12345 (Válida): ${validarSenha("Abc12345")}`);   
console.log(`abc12345 (Sem Maiúscula): ${validarSenha("abc12345")}`);   
console.log(`ABC12345 (Sem Minúscula): ${validarSenha("ABC12345")}`);   
console.log(`AbcDefgh (Sem Número): ${validarSenha("AbcDefgh")}`);   
console.log(`Abc123 (Curta): ${validarSenha("Abc123")}`);     


/* =========================================
EXERCÍCIO 6: CONVERSOR DE TEMPERATURA (BÔNUS)
=========================================
*/

// Função auxiliar para arredondar para 2 casas decimais
const arredondar = (valor) => Math.round(valor * 100) / 100;

const celsiusParaFahrenheit = (celsius) => {
    const fahrenheit = celsius * 9/5 + 32;
    return arredondar(fahrenheit);
};

const fahrenheitParaCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5/9;
    return arredondar(celsius);
};

const celsiusParaKelvin = (celsius) => {
    const kelvin = celsius + 273.15;
    return arredondar(kelvin);
};

// Testes Exercício 6:
console.log("\n=== EXERCÍCIO 6: Temperaturas ===");
console.log(`0°C em F: ${celsiusParaFahrenheit(0)}`);      
console.log(`100°C em F: ${celsiusParaFahrenheit(100)}`);    
console.log(`32°F em C: ${fahrenheitParaCelsius(32)}`);     
console.log(`212°F em C: ${fahrenheitParaCelsius(212)}`);    
console.log(`0°C em K: ${celsiusParaKelvin(0)}`);          
console.log(`100°C em K: ${celsiusParaKelvin(100)}`);