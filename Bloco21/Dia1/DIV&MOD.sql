Dica antes de iniciar: Um valor par pode ser classificado assim quando você o divide por 2 e o restante dessa divisão é 0.

Exercício 1: Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Impar'.
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
Exercício 2: Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 20 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Impar'.
SELECT IF(20 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
Exercício 3: Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;
Exercício 4: Utilizando o resultado anterior, responda à seguinte pergunta: Temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;