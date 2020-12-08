import React, { useState } from 'react';
import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import './Calculadora.css';

import CalculadoraService from './Calculadora.service';
const [
  calcular,
  concatenarNumero
  // SOMA,
  // SUBTRACAO,
  // MULTIPLICACAO,
  // DIVISAO
] = CalculadoraService();

const Calculadora = () => {
  const [txtNumeros, setTxtNumeros] = useState<string>('0');
  const [numero1, setNumero1] = useState<string>('0');
  const [numero2, setNumero2] = useState<string>('');
  const [operacao, setOperacao] = useState<string>('');

  const adicionarNumero = (numero: string) => {
    let resultado = '';

    if (operacao === '') {
      resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado)

    } else {
      resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado)
    }

    setTxtNumeros(resultado);
  }

  const definirOperacao = (op: string) => {
    // Caso a operação não tenha sido definida, seta a operação
    if (operacao === '') {
      setOperacao(op);
      return;
    }

    // Se a operação foi definida e o número2 foi setado, realiza o cálculo
    if (numero2 !== '') {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2('')
      setTxtNumeros(resultado.toString());
    }
  };

  const acaoCalcular = () => {
    if (numero2 === '') {
      return;
    }

    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);

    setTxtNumeros(resultado.toString());
  };

  const limpar = () => {
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2('');
    setOperacao('');
  }

  return (
    <Jumbotron
      style={
        {
          background: 'transparent !important',
          backgroundColor: '#007bff',
          padding: '5px',
          margin: '5px',
          width: '400px'
        }
      }
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button onClick={limpar} variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-right"
              readOnly={true}
              value={txtNumeros}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => adicionarNumero('7')} variant="light">7</Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumero('8')} variant="light">8</Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumero('9')} variant="light">9</Button>
          </Col>
          <Col>
            <Button onClick={() => definirOperacao('/')} variant="warning">/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => adicionarNumero('4')} variant="light">4</Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumero('5')} variant="light">5</Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumero('6')} variant="light">6</Button>
          </Col>
          <Col>
            <Button onClick={() => definirOperacao('*')} variant="warning">*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => adicionarNumero('1')} variant="light">1</Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumero('2')} variant="light">2</Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumero('3')} variant="light">3</Button>
          </Col>
          <Col>
            <Button onClick={() => definirOperacao('-')} variant="warning">-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => adicionarNumero('0')} variant="light">0</Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumero('.')} variant="light">.</Button>
          </Col>
          <Col>
            <Button onClick={acaoCalcular} variant="success">=</Button>
          </Col>
          <Col>
            <Button onClick={() => definirOperacao('+')} variant="warning">+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
