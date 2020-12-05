function CalculadoraService() {
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
        resultado = a - b;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }

  return [
    calcular,
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO
  ];

}

export default CalculadoraService;
