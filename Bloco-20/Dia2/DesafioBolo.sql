Escreva uma query que exiba todos os filmes cadastrados no banco de dados
SELECT * FROM sakila.film;

Escreva uma query que exiba apenas o nome dos filmes , ano de lançamento e classificação
SELECT title, rating, release_year FROM sakila.film;
Escreva uma query que exiba apenas os sobrenomes únicos cadastrados no banco sakila
SELECT distinct(last_name) from sakila.actor;
Crie queries para descobrir o seguinte: Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film;
Quantos clientes temos registrados?
SELECT COUNT(*) from sakila.customer;
Quantos sobrenomes únicos temos no banco de dados?
SELECT COUNT( DISTINCT last_name) FROM sakila.actor;
Quantas categorias de filmes o banco sakila possui?
SELECT COUNT(*) FROM sakila.category;
Quantos países são atendidos pela sakila?
SELECT COUNT(*) FROM sakila.country;
Vá até à tabela language do Sakila e crie uma pesquise que mostre os 5 idiomas cadastrados , mas não mostre o idioma "english"
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento, a duração e a classificação , ordenando pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title,release_year,length, replacement_cost, rating FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;