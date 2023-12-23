const calculadora = {
  somar(numeroEsquerda, numeroDireita) {
    return numeroEsquerda + numeroDireita;
  },
  subtrair(numeroEsquerda, numeroDireita) {
    return numeroEsquerda - numeroDireita;
  },
  multiplicar(numeroEsquerda, numeroDireita) {
    return numeroEsquerda * numeroDireita;
  },
  dividir(numeroEsquerda, numeroDireita) {
    if (numeroDireita === 0) {
      throw new Error("Não é possível dividir por zero");
    }
    return numeroEsquerda / numeroDireita;
  },
  potencia(base, expoente) {
    return Math.pow(base, expoente);
  },
};

module.exports = calculadora;
