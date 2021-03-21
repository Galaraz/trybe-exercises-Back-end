//A seguir encontra-se uma sugestão de solução para os exercícios propostos.

//Exercício 1: Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.
use ('class');
db.superheroes.findOne();

//Exercício 2: Selecione todos os super-heróis menores do que 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
db.superheroes.find(
    { "aspects.height": { $lt: 180 } }
).pretty();

//Exercício 3: Retorne o total de super-heróis menores que 1.80m.
db.superheroes.count(
    { "aspects.height": { $lt: 180 } }
);

//Exercício 4: Retorne o total de super-heróis com até 1.80m.
db.superheroes.count(
    { "aspects.height": { $lte: 180 } }
);

//Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.findOne(
    { "aspects.height": { $gte: 200 } }
);

//Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
db.superheroes.count(
    { "aspects.height": { $gte: 200 } }
);