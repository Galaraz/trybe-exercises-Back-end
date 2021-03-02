Exercício 1: Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

SELECT UCASE('trybe');
Exercício 2: Faça uma query que transforme a frase 'Você já ouviu falar do DuckGoGo?' em 'Você já ouviu falar do Google?' .
SELECT replace('Você já ouviu falar do DuckGoGo?', 'DuckGoGo', 'Google');
Exercício 3: Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .

SELECT LENGTH('Uma frase qualquer');
Exercício 4: Extraia a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- OU
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', -36, 10);
Exercício 5: Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');