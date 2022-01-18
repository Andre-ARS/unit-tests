const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails('ps4', 'notebook'))).toBe(true);
  });
  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('alcool', 'escova de dente').length).toBe(2);
  });
  it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails('ps4', 'notebook')[0] && typeof productDetails('ps4', 'notebook')[1]).toBe('object');
  });
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('ps4', 'notebook')[0]).not.toEqual(productDetails('ps4', 'notebook')[1]);
  });
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('ps4', 'notebook')[0].details.productId && productDetails('ps4', 'notebook')[1].details.productId).toMatch(/123/);
  });
});
