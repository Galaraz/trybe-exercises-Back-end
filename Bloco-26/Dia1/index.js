/* Exercício 1 : O script deve calcular o IMC de uma pessoa e exibi-lo na tela. Crie um novo pacote chamado calcula-imc , e utilize o script start do npm para executar nosso arquivo index.js . Siga utilizando o pacote readline-sync para coletar os dados do usuário. A fórmula para cálculo do IMC é peso / altura² .
Resolução :
Criar uma nova pasta onde o script será criado (use o comando mkdir se preferir);
Executar npm init e passar as informações solicitadas;
Instalar o pacote readline-sync com o comando npm install readline-sync ;
Criar o script, que deve ficar mais ou menos assim:
 */

const readline = require('readline-sync');

function calculaImc () {
  const peso = readline.questionFloat('Qual o seu peso (kg)? ').toFixed(2);
  const altura = readline.questionFloat('Qual sua altura (m)? ').toFixed(2);

  console.log('Peso: %s, altura: %s', peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('IMC: %s', imc);
}

calculaImc();
