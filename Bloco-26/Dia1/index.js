/* Exercício 1
O script deve calcular o IMC de uma pessoa e exibi-lo na tela.
Crie um novo pacote chamado calcula-imc , e utilize o script start do npm para executar nosso arquivo index.js . Siga utilizando o pacote readline-sync para coletar os dados do usuário. A fórmula para cálculo do IMC é peso / altura² .

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


/* Exercício 2
Agora, permita que o script seja executado através do comando npm run imc
O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .
Resolução
Editar o package.json para adicionar o script imc :
 */
{
  // ...
  "scripts": {
    // ...
    "imc": "node imc.js"
  }
  // ...
}

/* Executar o script através do comando npm run imc e garantir que tudo funciona corretamente.
Exercício 3
Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input do usuário.
Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal */

/* Resolução
Instalar o pacote readline-sync :
 */
npm i readline-sync
//Importar o readline-sync no arquivo imc.js :

const readline = require('readline-sync');

// const PESO_80KG = 80; // Você pode utilizar o valor que desejar aqui
// const ALTURA_1M_78CM = 178; // Você pode utilizar o valor que desejar aqui

// function calculaImc () {
//   const peso = PESO_80KG;
//   const altura = ALTURA_1M_78CM;

//   console.log('Peso: %s, altura: %s', peso, altura);

//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   console.log('IMC: %s', imc);
// }

// calculaImc();
Substituir os valores de peso e altura por perguntas à pessoa que executou o script utilizando o método questionInt :

// const readline = require('readline-sync');

// function calculaImc () {
     const peso = readline.questionInt('Qual o seu peso? (em kg)');
     const altura = readline.questionInt('Qual a sua altura? (em cm)');

//   console.log('Peso: %s, altura: %s', peso, altura);

//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   console.log('IMC: %s', imc);
// }

// calculaImc();
Exercício 4
Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
Encontrou a função? Show! Agora utilize-a para solicitar o input de peso e altura .
Resolução
Encontre, na documentação do readline-sync , a função questionFloat
Altere o código do script de IMC para que utilize a função questionFloat para solicitar o peso da pessoa:

// const readline = require('readline-sync');

// function calculaImc () {
     const peso = readline.questionFloat('Qual o seu peso? (em kg)');
//   const altura = readline.questionInt('Qual a sua altura? (em cm)');

//   console.log('Peso: %s, altura: %s', peso, altura);

//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   console.log('IMC: %s', imc);
// }

// calculaImc();
Exercício 5
Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
Considere a seguinte tabela para classificar a situação do IMC:
IMC	Situação
Abaixo de 18,5	Abaixo do peso (magreza)
Entre 18,5 e 24,9    	Peso normal
Entre 25,0 e 29,9	Acima do peso (sobrepeso)
Entre 30,0 e 34,9	Obesidade grau I
Entre 35,0 e 39,9	Obesidade grau II
40,0 e acima	Obesidade graus III e IV
Resolução
Adicionar, depois da linha que exibe o IMC calculado, os operadores condicionais para verificar qual a situação do IMC. O código a ser adicionado deve ser parecido com este:

// const readline = require('readline-sync');

// function calculaImc () {
// ...

//   console.log('IMC: %s', imc);

     if (imc < 18.5) {
       console.log('Situação: Abaixo do peso (magreza)');
       return;
     }

     if (imc >= 18.5 && imc < 25) {
       console.log('Situação: Peso normal');
       return;
     }

     if (imc >= 25 && imc < 30) {
       console.log('Situação: Acima do peso (sobrepeso)');
       return;
     }

     if (imc >= 30 && imc < 35) {
       console.log('Situação: Obesidade grau I');
       return;
     }

     if (imc >= 35 && imc < 40) {
       console.log('Situação: Obesidade grau II');
       return;
     }

     console.log('Situação: Obesidade graus III e IV');
// }

// calculaImc();
Execute novamente o script e verifique se os valores estão corretos.
Exercício 6
Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida
A fórmula para calcular velocidade média é distância / tempo .
Armazene o script no arquivo velocidade.js .
Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie um novo script no package.json chamado velocidade .
Utilize o readline-sync para solicitar os dados à pessoa.
Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.
Resolução
Criar o arquivo velocidade.js com um conteúdo parecido com o seguinte:

const readline = require('readline-sync');

const distancia = readline.questionInt('Distância percorrida (m)');
const tempo = readline.questionInt('Tempo gasto (s)');

const velocidadeMedia = (distancia / tempo).toFixed(2);

console.log(`Velocidade média: ${velocidadeMedia} m/s`);
Crie o script velocidade com o conteúdo node velocidade.js no package.json :

{
  // ...
  "scripts": {
    // ...
    "velocidade": "node velocidade.js"
  }
  // ...
}
Execute o script utilizando npm run velocidade e verifique se os valores corretos estão sendo retornados
Exercício 7
Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
O script deve ser executado através do comando npm run sorteio .
Utilize o readline-sync para realizar input de dados.
Armazene o script em sorteio.js.
O número gerado deve ser um inteiro entre 0 e 10.
Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.
Resolução
Crie o arquivo sorteio.js com o conteúdo a seguir:

const readline = require('readline-sync');

// Criamos uma função para poder utilzar early return
function logResultado(numero, resposta) {
  // Aqui, utilizamos o return para interromper a execução da função
  // Esse é o padrão de código conhecido com early return, ou seja:
  // retornamos "mais cedo" pois uma determinada condição (no caso, a resposta estar certa)
  // não foi atingida.
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  // Como o if da linha acima tem um `return`, não precisamos do `else`, já que, se a execução
  // do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}

function runGame() {
  const numero = Math.random() * 10;

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando'
  );

  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não)'
  );

  // Mais uma vez, utilizamos um return para interromper a execução do código mais cedo,
  // o que elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');

  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}

// Executamos o jogo pela primeira vez
runGame();
Crie o script sorteio no package.json com o conteúdo node sorteio.js .
Execute o script utilizando o comando npm run sorteio e verifique a funcionalidade.
Exercício 8
Crie um arquivo index.js que pergunta qual script deve ser executado
O script deve ser acionado através do comando npm start .
Utilize o readline-sync para realizar o input de dados
Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
Ao digitar o número de um script e pressionar enter , o script deve ser executado.
Você pode utilizar o require para executar o script em questão.
Resolução
Crie o arquivo index.js com o seguinte conteúdo:

const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
const mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`)
  // Adicionamos uma linha a mais no começo da mensagem
  .unshift('Escolha um número para executar o script correspondente')
  .join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);
Crie o script start com o conteúdo node index.js no package.json :

{
  // ...
  "scripts": {
    // ...
    "start": "node index.js"
  }
  // ...
}
Execute o script através do comando npm start e verifique a funcionalidade
Bônus
Exercício 1
Crie um script que realize o fatorial de um número n .
Armazene o script no arquivo fatorial.js .
Utilize o readline-sync para realizar o input de dados.
O script deve ser acionado através do comando npm run fatorial
Adicione o script ao menu criado no exercício 5.
Adicione validações para garantir que o valor informado seja um inteiro maior que 0.
Resolução:
Criar o arquivo fatorial.js , que deve ficar mais ou menos assim:

const readline = require('readline-sync');

function realizaFatoracao(x) {
  // Se x for 0 ou 1
  return [0, 1].includes(x)
    // Retornamos 1
    ? 1
    // Caso contrário, continuamos o cálculo do fatorial multiplicando x pelo fatorial de x - 1
    : x * realizaFatoracao(x - 1);
}

async function realizaCalculo() {
  const x = readline.questionInt('Informe o valor de x:');

  if (x <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`x: ${x}`);

  const resultado = realizaFatoracao(x);

  console.log(`Resultado: ${resultado}`);
}

realizaCalculo();
Criar o script fatorial no package.json , contendo o comando node fatorial.js :

{
  // ...
  "scripts": {
    // ...
    "fatorial": "node fatorial.js"
  }
  // ...
}
Executar o script utilizando npm run fatorial e certificar-se de que os valores retornados estão corretos. Você pode digitar o valor de n seguido por ! no Google para conferir o resultado. Exemplo: 10! .
Adicione um objeto contendo o nome e o caminho deste script ao array scripts do index.js

// ...
// const scripts = [
//   { name: 'Calcular IMC', script: './imc.js' },
//   { name: 'Calcular velocidade média', script: './velocidade.js' },
//   { name: 'Jogo de adivinhação', script: './sorteio.js' },
     { name: 'Calcular fatorial', script: './fatorial.js' },
// ];
// ...
Exercício 2
Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci .
Armazene o script no arquivo fibonacci.js .
Utilize o readline-sync para realizar o input de dados.
O script deve ser acionado através do comando npm run fibonacci
Adicione o script ao menu criado no exercício 5.
Não imprima o valor 0 , uma vez que ele não está incluso na sequência;
Quando n = 10 , exatamente 10 elementos devem ser exibidos;
Adicione validações para garantir que o valor informado é um inteiro maior que 0.
Resolução
Criar o arquivo fibonacci.js , que deve ficar mais ou menos assim:

const readline = require('readline-sync');

function calculaElemento (n) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior que 0
  for (; n >= 0; n--) {
    if (b) console.log(b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a = a + b;
    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
  }

  console.log(b);
  return b;
}

async function realizaCalculo() {
  const n = readline.questionInt('Digite o valor de n:');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
}

realizaCalculo();
Criar o script fibonacci no package.json , contendo o comando node fibonacci.js ;

{
  // ...
  "scripts": {
    // ...
    "fibonacci": "node fibonacci.js"
  }
  // ...
}
Executar o script utilizando npm run fibonacci e certificar-se de que os valores retornados estão corretos.
Adicione um objeto contendo o nome e o caminho deste script ao array scripts do index.js

// ...
// const scripts = [
//   { name: 'Calcular IMC', script: './imc.js' },
//   { name: 'Calcular velocidade média', script: './velocidade.js' },
//   { name: 'Jogo de adivinhação', script: './sorteio.js' },
//   { name: 'Calcular fatorial', script: './fatorial.js' },
     { name: 'Exibir n números de fibonacci', script: './fibonacci.js' },
// ];
// ...