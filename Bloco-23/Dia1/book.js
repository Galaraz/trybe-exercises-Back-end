Para importar a coleção books para um banco chamado class , utilize o comando abaixo:

mongoimport --db class books.json
Apost a importação, selecione o banco class no seu cliente:

use class
Exercício 7 : Retorne a quantidade de documentos da coleção books .

db.books.count()
Exercício 8 : Conte quantos livros existem com o status "PUBLISH" .

db.books.count(
    { status: "PUBLISH" }
)
Exercício 9 : Exiba os campos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o campo _id .

db.books.find(
    {},
    {
        _id: 0,
        title: 1,
        isbn: 1,
        pageCount: 1
    }
).limit(3).pretty()
Exercício 10: Pule 5 documentos e exiba os campos _id , title , authors e status do livros com status "MEAP" , limitando a 10 documentos.

db.books.find(
    {
        status: "MEAP"
    },
    {
        title: 1,
        authors: 1,
        status: 1
    }
).skip(5).limit(10).pretty()