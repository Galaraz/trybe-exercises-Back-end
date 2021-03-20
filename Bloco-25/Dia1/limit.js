//Operador $limit

//Exercício 1:

db.transactions.aggregate([
  {
    $match: {
      from: 'Dave America',
    },
  },
]);

//Exercício 2:

db.transactions.aggregate([
  {
    $match: {
      $or: [
        { value: { $gt: 700, $lt: 6000 }},
        { to: 'Lisa Simpson' },
      ]
    }
  },
]);
//Exercício 3:
Copiar
db.transactions.aggregate([
  {
    $match: {
      value: { $gt: 1000 },
    },
  },
  {
    $limit: 3,
  },
]);