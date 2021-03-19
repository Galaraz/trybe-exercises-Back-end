use ("class");

db.produtos.insertOne({
    _id : 1,
    item : "Gola Polo",
    tamanhos: [ "P", "M", "G"]
});

db.produtos.aggregate([
    { $unwind : "$tamanhos" }
]);

db.produtos.insertOne({
    _id : 2,
    item : "Camiseta",
    tamanhos: [ "P", "M", "G"]
});

db.produtos.aggregate([
    { $unwind : "$tamanhos" }
]);

db.produtos.insertOne({
    _id : 3,
    item : "Moletom",
    tamanhos: [ "M", "G"]
});

db.produtos.aggregate([
    { $unwind : "$tamanhos" }
]);

db.produtos.aggregate([
    { $unwind : "$tamanhos" },
    {
        $match: {
            tamanhos: "P"
        }
    }
])
