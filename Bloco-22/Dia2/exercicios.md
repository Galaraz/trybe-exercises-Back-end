#Exercícios de fixação

##Exercício 1: Analise as tabelas actor , address , city e film do banco de dados sakila e determine se elas estão ou não dentro de alguma das formas normais.
Tabela actor
Está na 3ª Forma Normal.
Motivo:

1ª Forma Normal
Colunas possuem apenas um valor
Valores em uma coluna são do mesmo tipo de dados
Cada coluna possuem um nome único
A ordem dos dados registrados em uma tabela não afeta a integridade dos dados

2ª Forma Normal
Tabela está na 1ª Forma Normal
A tabela não possui dependências parciais

3ª Forma Normal
Tabela está na 1ª e 2ª Formas Normais
Tabela não contém atributos (colunas) que não são totalmente dependentes na PK (chave primária)
Tabela address
Está na 3ª Forma Normal.
Motivo:

1ª Forma Normal
Colunas possuem apenas um valor
Valores em uma coluna são do mesmo tipo de dados
Cada coluna possuem um nome único
A ordem dos dados registrados em uma tabela não afeta a integridade dos dados

2ª Forma Normal
Tabela está na 1ª Forma Normal
A tabela não possui dependências parciais

3ª Forma Normal
Tabela está na 1ª e 2ª Formas Normais
Tabela não contém atributos (colunas) que não são totalmente dependentes na PK (chave primária)
Tabela city
Está na 3ª Forma Normal.
Motivo:

1ª Forma Normal
Colunas possuem apenas um valor
Valores em uma coluna são do mesmo tipo de dados
Cada coluna possuem um nome único
A ordem dos dados registrados em uma tabela não afeta a integridade dos dados

2ª Forma Normal
Tabela está na 1ª Forma Normal
A tabela não possui dependências parciais

3ª Forma Normal
Tabela está na 1ª e 2ª Formas Normais
Tabela não contém atributos (colunas) que não são totalmente dependentes na PK (chave primária)
Tabela film
Não está normalizada corretamente.
Motivo:
Coluna special_features possui mais de 1 valor, o que viola uma das regras da 1ª Forma Normal.


##Exercício 2: Normalize a estrutura a seguir para a 1ª Forma Normal
Obs.: Lembre-se de que existem diversas maneiras de resolver o mesmo problema, desde que todas as condiçoes da 1ª Forma Normal sejam atendidas.
1ª Forma Normal
Colunas devem possuir apenas um valor
Valores em uma coluna devem ser do mesmo tipo de dados
Cada coluna deve possuir um nome único
A ordem dos dados não deve after a integridade dos dados:

Tabela funcionario

| funcionario_id   | nome     | sobrenome | contato                  | telefone        | data_cadastro         | setor         |
|:----------------:|----------|-----------|--------------------------|-----------------|-----------------------|---------------|
| 12               | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25   | Administração |
| 12               | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 |  2020-05-05 08:50:25  | Vendas        |
| 13               | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 2020-02-05 00:00:00   | Operacional   |
| 14               | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35   | Estratégico   |
| 14               | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35   | Vendas        |
| 15               | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40   | Marketing     |


##Exercício 3: Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2° Forma Normal.
Novamente, há diferentes maneiras de resolver esse problema. Desde que se atenda aos requisitos a seguir, considere o exercício correto.
2ª Forma Normal
Tabela deve estar na 1ª Forma Normal
A tabela não deve possuir dependências parciais

Tabela funcionario:

| funcionario_id | nome     | sobrenome | contato                  | telefone        | data_cadastro       |
|:--------------:|----------|-----------|--------------------------|-----------------|---------------------|
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25 |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 2020-02-05 00:00:00 |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35 |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40 |

Tabela setor:

| setor_id | nome          |
|:--------:|---------------|
| 1        | Administração |
| 2        | Vendas        |
| 3        | Operacional   |
| 4        | Estratégico   |
| 5        | Marketing     |


Tabela setor_funcionario ou funcionario_setor (ou algum nome que represente claramente os dados presentes nessa tabela)

| funcionario_id | setor_id |
|:--------------:|----------|
| 12             | 1        |
| 12             | 2        |
| 13             | 3        |
| 14             | 4        |
| 14             | 2        |
| 15             | 5        |