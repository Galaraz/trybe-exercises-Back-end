/* Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
Sem utilizar o operador $eq :
 */
db.superheroes.find(
    { "aspects.eyeColor": "green"}
);

//Utilizando o operador $eq :
db.superheroes.find(
    { "aspects.eyeColor": { $eq: "green" } }
).pretty();

//Exercício 8: Retorne o total de super-heróis com olhos azuis.
//Sem utilizar o operador $eq :
db.superheroes.count(
    { "aspects.eyeColor": "blue"}
);

//Utilizando o operador $eq :
db.superheroes.count(
    { "aspects.eyeColor": { $eq: "blue" } }
);

//Exercício 9: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.find(
    { "aspects.hairColor": { $in: ["black", "No Hair"] } }
).pretty();

//Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.count(
    { "aspects.hairColor": { $in: ["black", "No Hair"] } }
);

//Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.count(
    { "aspects.hairColor": { $nin: ["black", "No Hair"] } }
);

//Exercício 12: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.superheroes.count(
    { "aspects.height": { $not: { $gt: 180 } } }
);

//Exercício 13: Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m .
db.superheroes.find(
    {
        $nor: [
            { race: "Human" },
            { "aspects.height": { $gt: 180 } }
        ]
    }
).pretty();

//Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
db.superheroes.find(
    {
        $and:[
            {
                $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
            },
            {
                publisher: "Marvel Comics"
            }
        ]
    }
).pretty();