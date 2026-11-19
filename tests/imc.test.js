import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcularIMC, classificarIMC } from '../site/imc.js';

test('calcula o IMC corretamente', () => {
  assert.equal(calcularIMC(70, 1.75), 22.9);
  assert.equal(calcularIMC(50, 1.6), 19.5);
});

test('aceita valores numéricos em string', () => {
  assert.equal(calcularIMC('80', '1.80'), 24.7);
});

test('rejeita valores zero ou negativos', () => {
  assert.throws(() => calcularIMC(0, 1.7), /maiores que zero/);
  assert.throws(() => calcularIMC(70, -1), /maiores que zero/);
});

test('rejeita valores não numéricos', () => {
  assert.throws(() => calcularIMC('abc', 1.7), /números/);
});

test('classifica o IMC segundo a OMS', () => {
  assert.equal(classificarIMC(17), 'Abaixo do peso');
  assert.equal(classificarIMC(22.9), 'Peso normal');
  assert.equal(classificarIMC(27), 'Sobrepeso');
  assert.equal(classificarIMC(32), 'Obesidade grau I');
  assert.equal(classificarIMC(37), 'Obesidade grau II');
  assert.equal(classificarIMC(42), 'Obesidade grau III');
});
