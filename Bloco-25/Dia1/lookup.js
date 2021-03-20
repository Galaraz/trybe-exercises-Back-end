//Exercício 1:

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_history"
    },
  },
]);
//Exercício 2:

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
  {
    $limit: 4,
  },
]);
//Exercício 3:

db.clients.aggregate([
  {
    $match: { State: 'Florida' },
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
]);