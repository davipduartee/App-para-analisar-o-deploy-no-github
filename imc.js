/**
 * Calcula o Índice de Massa Corporal (IMC).
 * @param {number} pesoKg  peso em quilogramas
 * @param {number} alturaM altura em metros
 * @returns {number} IMC arredondado para 1 casa decimal
 */
export function calcularIMC(pesoKg, alturaM) {
  const peso = Number(pesoKg);
  const altura = Number(alturaM);

  if (!Number.isFinite(peso) || !Number.isFinite(altura)) {
    throw new Error('Peso e altura devem ser números.');
  }
  if (peso <= 0 || altura <= 0) {
    throw new Error('Peso e altura devem ser maiores que zero.');
  }

  return Math.round((peso / (altura * altura)) * 10) / 10;
}

/**
 * Classifica o IMC segundo a tabela da OMS.
 * @param {number} imc
 * @returns {string}
 */
export function classificarIMC(imc) {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau I';
  if (imc < 40) return 'Obesidade grau II';
  return 'Obesidade grau III';
}
