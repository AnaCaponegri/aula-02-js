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
    
