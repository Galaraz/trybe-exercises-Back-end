Como usar um INDEX

Exercício 1: Adicione um índice à coluna district da tabela sakila.address . Esse índice deve ser não textual e permitir registros duplicados. Mensure o resultado utilizando a seguinte query:

SELECT *
FROM sakila.address
WHERE district = 'Alberta';

CREATE INDEX district_index ON sakila.address (district);

SELECT *
FROM sakila.address
WHERE district = 'Alberta';

DROP INDEX district_index ON sakila.address;

SELECT *
FROM sakila.address
WHERE district = 'Alberta';
Exercício 2: Adicione um FULLTEXT INDEX à coluna description da tabela sakila.film e depois compare o custo da query abaixo com e sem índice.

-- Query para verificar custo com o uso de índice:
SELECT *
FROM sakila.film
WHERE
    MATCH(description)
    AGAINST('a Man And a Monkey who must Discover a Man in The First');

-- Query para verificar custo sem o uso índice:
SELECT *
FROM sakila.film
WHERE
    description LIKE '%a Man And a Monkey who must Discover a Man in The First%';

CREATE FULLTEXT INDEX description_index ON sakila.film (description);

SELECT *
FROM sakila.film
WHERE
    MATCH(description)
    AGAINST('a Man And a Monkey who must Discover a Man in The First');

DROP INDEX description_index ON sakila.film;

SELECT *
FROM sakila.film
WHERE
    description LIKE '%a Man And a Monkey who must Discover a Man in The First%';
