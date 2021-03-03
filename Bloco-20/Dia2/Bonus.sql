Bônus

Exercício 2: Tarefas do 1 ao 4:

1-Escreva uma query para ordernar o nome das empresas de forma alfabética descendente e que retorne somente o código e o nome da primeira empresa.
USE PiecesProviders;
SELECT Code, Name FROM Providers
ORDER BY Name DESC
LIMIT 1;
2-Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT Piece, Price FROM Provides
ORDER BY Price DESC LIMIT 5;
3-Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT DISTINCT Provider, Price FROM Provides
ORDER BY Price DESC LIMIT 4 OFFSET 3;
4-Escreva uma query para exibir a string "A peça mais cara é a: Piece , provida pela empresa Provider e custa Price reais.", essa query deve retornar somene uma única string, sendo que Price se refere ao maior preço.
SELECT CONCAT('A peça mais cara é a: ', Piece, ', provida pela empresa ', Provider, ' e custa ', Price, ' reais.') FROM Provides
ORDER BY Price DESC
LIMIT 1;
Soluções LIKE

1-Encontre todos os detalhes dos filmes que contêm a palavra " ace " no nome

    SELECT * FROM sakila.film
    WHERE title LIKE '%ace%';
2-Encontre todos os detalhes dos filmes cuja descrição finaliza com " china "

    SELECT * FROM sakila.film
    WHERE description LIKE '%china'

3-Encontre todos os detalhes dos 2 filmes cuja descrição contém a palavra " girl " e o título finaliza com a palavra " lord "
    SELECT * FROM sakila.film
    WHERE description LIKE '%Girl%' AND title LIKE '%lord'

4-Encontre os dois casos em que, a partir do 4° caratere no título do filme, tem-se a palavra " gon "
    SELECT * FROM sakila.film
    WHERE title LIKE '___gon%'

5-Encontre os dois casos nos quais, a partir do 4° caractere no título do filme, tem-se a palavra " gon " e a descrição contém a palavra " Documentary "
    SELECT * FROM sakila.film
    WHERE title like '___gon%' AND description like '%documentary%'

6-Encontre os 2 filmes cujos títulos finalizam com " academy " ou iniciam com " mosquito "

    SELECT * FROM sakila.film
    WHERE title like '%academy' or title like 'mosquito%'

7-Encontre os 6 filmes que contêm as palavras " monkey " e " sumo " em suas descrições
    SELECT * FROM sakila.film
    WHERE description like '%monkey%' AND description like '%sumo%'

Soluções IN e BETWEEN

1-Como eu faria, então, para encontrar, usando o IN , todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269,239,126,399,142?
SELECT * FROM sakila.rental
WHERE customer_id IN (269,239,126,399,142);
2-Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas?

SELECT * FROM sakila.address
WHERE district IN('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou','Texas')

3-Encontre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
SELECT first_name, last_name, email FROM SAKILA.CUSTOMER
WHERE last_name IN ('HICKS', 'CRAWFORD', 'HENRY', 'BOYD', 'MASON', 'MORALES', 'KENNEDY')
ORDER BY first_name

4-Encontre o e-mail dos clientes com os seguintes address_id: 172 ,173 ,174 ,175 ,176, ordenados em ordem alfabética.
SELECT  email FROM SAKILA.CUSTOMER
WHERE address_id IN (172 ,173 ,174 ,175 ,176)
ORDER BY email

5-Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT count(*) FROM sakila.payment
WHERE payment_date BETWEEN CAST('2005-05-01' AS DATE) AND CAST('2005-08-01' AS DATE);
6-Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados por filmes com maior duração de empréstimo primeiro.
SELECT title, release_year, rental_duration  FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC
--Ou
SELECT title, release_year, rental_duration  FROM sakila.film
WHERE rental_duration IN(3,4,5,6) ORDER BY rental_duration DESC

7-Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores de idade. Os resultados devem estar ordenados por classificação mais abrangente primeiro.
SELECT title, rating FROM sakila.film
WHERE rating IN ('G','PG','PG-13')
ORDER BY rating
LIMIT 50

8-Encontrando e separando resultados que incluem datas
Quantos aluguéis temos na seguinte data de retorno: "2005-08-29" (múltiplas maneiras possíveis de encontrar a resposta)?
    SELECT count(*) FROM sakila.rental
    WHERE date(return_date) = '2005-08-29';
    SELECT * FROM sakila.rental;
    -- Ou
    SELECT count(*) FROM sakila.rental
    WHERE return_date like '2005-08-29%';
    SELECT * FROM sakila.rental;
9-Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005?
    SELECT count(*) FROM sakila.rental
    WHERE rental_date BETWEEN '2005-07-01' AND '2005-08-22';
10-Usando a tabela Rental, extraia a data, ano, mês, dia, hora, minuto e segundo do rental_id 10330
    -- Data
    SELECT DATE(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Ano
    SELECT YEAR(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Mês
    SELECT MONTH(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Dia
    SELECT DAY(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Hora
    SELECT HOUR(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Minuto
    SELECT MINUTE(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    -- Segundo
    SELECT SECOND(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
11-Monte uma query que encontre o id e data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
    SELECT rental_id,rental_date FROM sakila.rental
    WHERE rental_date like '2005-08-18 00:14:03%'