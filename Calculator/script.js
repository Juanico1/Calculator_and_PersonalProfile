function calcular(operacion) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(n1) || isNaN(n2)) {
      resultado.textContent = "Resultado: Ingresa números válidos.";
      return;
    }
  
    let total = 0;
  
    if (operacion === '+') {
      total = n1 + n2;
    } else if (operacion === '-') {
      total = n1 - n2;
    } else if (operacion === '*') {
      total = n1 * n2;
    } else if (operacion === '/') {
      if (n2 === 0) {
        resultado.textContent = "Error: No se puede dividir entre cero";
        return;
      }
      total = n1 / n2;
    }
  
    resultado.textContent = "Resultado: " + total;
  }
  