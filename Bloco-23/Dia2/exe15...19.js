//Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes , e não sejam publicados pela DC Comics .
db.superheroes.find(
    {
        $and: [
            {
                "aspects.weight": { $gte: 80, $lte: 100 }
            },
            {
                $or: [{ race: "Human" }, { race: "Mutant" }]
            },
            {
                publisher: { $ne: "DC Comics" }
            }
        ]
    }
).pretty();

//Exercício 16: Retorne o total de documentos que não contém o campo race .
db.superheroes.count(
    { race: { $exists: false } }
);

//Exercício 17: Retorne o total de documentos que contém o campo hairColor .
db.superheroes.count(
    { "aspects.hairColor": { $exists: true } }
);

//Exercício 18: Remova apenas um documento publicado pela Sony Pictures .
db.superheroes.deleteOne(
    { publisher: "Sony Pictures" }
);

//Exercício 19: Remova todos os documentos publicados pelo George Lucas .
db.superheroes.deleteMany(
    { publisher: "George Lucas" }
);