function CalculadoraService(): any[] {
  const SOMA = '+';
  const SUBTRACAO = '-';
  const MULTIPLICACAO = '*';
  const DIVISAO = '/';

  function calcular(a: number, b: number, op: string) {
    let resultado = 0;

    switch (op) {
      case SOMA:
        resultado = a + b;
        break;
      case SUBTRACAO:
        resultado = a - b;
        break;
      case MULTIPLICACAO:
        resultado = a * b;
        break;
      case DIVISAO:
        resultado = a / b;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }

  function concatenarNumero(numAtual: string, numConcat: string) {
    // Caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    };

    // Se o primeiro digito for '.', concatena um '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    };

    // Caso '.' digitado e já contenha um ponto, apenas retornar
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  return [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO
  ];

}

export default CalculadoraService;
