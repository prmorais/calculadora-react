import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './Calculadora.service';


describe('Teste do CalculadoraService', () => {
  const [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO
  ] = CalculadoraService();

  it('Deve garantir que 1 + 4 = 5.', () => {
    let soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });

  it('Deve garantir que 1 - 4 = -3.', () => {
    let subtracao = calcular(1, 4, SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('Deve garantir que 1 * 4 = 4.', () => {
    let multiplicacao = calcular(1, 4, MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  });

  it('Deve garantir que 1 / 4 = 0.25.', () => {
    let divisao = calcular(1, 4, DIVISAO);
    expect(divisao).toEqual(0.25);
  });

  it('Deve retorna 0 para operação inválida.', () => {
    let divisao = calcular(1, 4, '%');
    expect(divisao).toEqual(0);
  });
});
