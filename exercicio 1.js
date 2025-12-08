// Usando Arrow Functions para sintaxe moderna
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    // Verificação de divisão por zero
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
};

// Testes Exercício 1:
console.log("=== EXERCÍCIO 1: Calculadora ===");
console.log(`Soma (5, 3): ${somar(5, 3)}`);           
console.log(`Subtração (10, 4): ${subtrair(10, 4)}`);       
console.log(`Multiplicação (3, 7): ${multiplicar(3, 7)}`);     
console.log(`Divisão (15, 3): ${dividir(15, 3)}`);        
console.log(`Divisão por zero (10, 0): ${dividir(10, 0)}`);        
