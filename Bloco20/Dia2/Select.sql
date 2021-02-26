1-Monte uma query que exiba seu nome da tela;
SELECT 'jhonatan';

2-Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'amanda', 'santos', 'Belo Horizonte', 19;

3- Monte uma query que, além de exibir todas as informações acima, identifica cada coluna usando o AS , que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT 'amanda' AS Nome, 'santos' AS Sobrenome, 'Belo Horizonte' AS 'Cidade Natal', 19 AS Idade;

4- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13*8;

5-Monte uma query que exiba a data e hora atuais e dê a essa coluna o nome 'Data Atual'.
SELECT now() as 'Data Atual';