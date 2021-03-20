O que é e como lidar com uma VIEW
Exercício 1: Monte uma VIEW , usando as tabelas film e language , que exiba o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir. Dê o nome de " movies_languages " à sua VIEW .

Resultado de `SELECT * FROM movies_languages`

CREATE VIEW movies_languages AS
    SELECT f.title, f.language_id, l.name AS language
    FROM sakila.film f
    INNER JOIN sakila.language l ON l.language_id = f.language_id;
