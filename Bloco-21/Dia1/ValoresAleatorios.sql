Exercício 1: Monte uma query que gere um valor entre 15 e 20 .
SELECT FLOOR(15 + (RAND() * 5));
Exercício 2: Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais.
SELECT ROUND(15.75, 5);
Exercício 3: Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);
Exercício 4: Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);