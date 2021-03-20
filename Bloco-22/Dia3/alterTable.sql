Tudo que você deve saber sobre o ALTER TABLE

Exercício 1: Adicione uma coluna memoria_ram que deve armazenar um valor inteiro, mas não deve permitir valores nulos.

ALTER TABLE computador ADD COLUMN memoria_ram INT NOT NULL;
Exercício 2: A coluna computador_id deve ser o identificador da tabela computador. Transforme-a em uma primary key .

ALTER TABLE computador MODIFY COLUMN computador_id INT PRIMARY KEY;
Exercício 3: A coluna computador_id deve ser incrementada automaticamente a cada nova inserção de dados. Altere-a para refletir isso.

ALTER TABLE computador MODIFY computador_id INT auto_increment;
Exercício 4: A coluna preco precisa guardar valores decimais com valores de até R$99.999,99. Altere o tipo para se adequar a esse requisito.

ALTER TABLE computador MODIFY preco DECIMAL(7, 2);
Exercício 5: Modifique o nome da coluna preco para valor .

ALTER TABLE computador CHANGE COLUMN preco valor DECIMAL(7, 2);