Exercício 1: Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT id, title
FROM hotel.books AS b
WHERE NOT EXISTS(
    SELECT *
    FROM hotel.books_lent
    WHERE b.Id = book_id
);
Exercício 2: Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contem a palavra "lost" no título.
SELECT id, title
FROM hotel.books b
WHERE EXISTS(
    SELECT *
    FROM hotel.books_lent
    WHERE b.Id = book_id AND b.title like '%lost%'
);
Exercício 3: Usando a tabela carsales e customer , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT name
FROM hotel.customers c
WHERE NOT EXISTS(
    SELECT *
    FROM carsales
    WHERE customerid = c.customerid
);
Exercício 4: Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customer e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cus.name, car.name
FROM cars car
INNER JOIN customers cus
WHERE EXISTS(
    SELECT *
    FROM hotel.carsales
    WHERE CustomerID = cus.CustomerId
    AND carID = car.ID
);
