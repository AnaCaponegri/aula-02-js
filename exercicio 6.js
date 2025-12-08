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