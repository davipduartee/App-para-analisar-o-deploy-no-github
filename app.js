import { calcularIMC, classificarIMC } from './imc.js';

const form = document.getElementById('form-imc');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const peso = parseFloat(form.peso.value.replace(',', '.'));
  const altura = parseFloat(form.altura.value.replace(',', '.'));

  try {
    const imc = calcularIMC(peso, altura);
    resultado.className = 'resultado ok';
    resultado.textContent = `Seu IMC é ${imc.toFixed(1)} — ${classificarIMC(imc)}`;
  } catch (erro) {
    resultado.className = 'resultado erro';
    resultado.textContent = erro.message;
  }
});
