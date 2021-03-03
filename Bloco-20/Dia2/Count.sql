1-Quantas senhas temos cadastradas nessa tabela? 1

SELECT COUNT(password) FROM sakila.staff;

2-Quantas pessoas temos, no total, trabalhando para nossa empresa? 2

SELECT COUNT(*) FROM sakila.staff;

3-Quantas fotos temos cadastradas nessa tabela? 1

SELECT COUNT(picture) FROM sakila.staff;


Tranquilo, não é? Agora, olhando a resultado a seguir, qual query eu teria que montar para trazer os 10 primeiros resultados, a partir da Jennifer?
SELECT * FROM sakila.actor
LIMIT 10 OFFSET 5;

