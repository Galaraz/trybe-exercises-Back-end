use ("dataFlights");

db.voos.findOne();
db.voos.countDocuments();

db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } }
]);

db.voos.aggregate([
    { 
        $match: {
            "empresa.nome": "AMERICAN AIRLINES",
            decolagens: { $gt: 85 }
        }
    }
]);

db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    { $count: "totalDeVoos" }
]);