db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    { $limit: 3 }
]).pretty();

db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    { $sort: { decolagens: -1 } },
    { $limit: 3 }
]).pretty();