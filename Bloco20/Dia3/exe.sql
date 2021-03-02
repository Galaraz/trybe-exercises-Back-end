1-Escreva uma query para exibir todas as peças que começam com GR .
USE PecasFornecedores;
SELECT * FROM Pecas WHERE name LIKE 'GR%';
2-Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2. Organize o resultado por alfabética de fornecedor.
USE PecasFornecedores;
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY fornecedor;
3-Escreva uma query para exibir as peças e o preço de todos os fornecimentos em que o código do fornecedor tenha a letra N .
USE PecasFornecedores;
SELECT peca, preco FROM Fornecimentos WHERE fornecedor LIKE '%N%';
4-Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
USE PecasFornecedores;
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA' ORDER BY name DESC;
5-Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
USE PecasFornecedores;
SELECT count(*) FROM Fornecedores WHERE code LIKE '%F%';
6-Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
Copiar
USE PecasFornecedores;
SELECT * FROM Fornecimentos WHERE preco BETWEEN 15 AND 40 ORDER BY preco;
Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .
Copiar
USE PecasFornecedores;
SELECT count(*) FROM Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
