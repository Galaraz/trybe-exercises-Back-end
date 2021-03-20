db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    {
        $group: {
            _id: null,
            count: { $sum: 1 }
        }
    }
]);

db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    {
        $group: {
            _id: "totalDeVoos",
            total: { $sum: 1 }
        }
    }
]);

// DISTINCT
db.voos.aggregate([
    { $group : { _id : "$empresa.nome" } }
]);

db.voos.aggregate([
    { $group : { _id : "$empresa.nome" } },
    { $sort: { "_id": 1 } }
])

// Acumulando Valores
db.voos.aggregate([
    {
        $group : {
            _id : "$empresa.nome",
            total: {
                $sum: "$decolagens"
            }
        }
    }
])

// Multiplicando valores
db.voos.updateMany({}, { $set: { valorPassagem: NumberDecimal("200.00") } })

db.voos.aggregate([
    {
      $group :
        {
            _id : "$empresa.nome",
            totalDeVendas: {
                $sum: {
                    $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
                }
            }
        }
    },
    { $limit: 10 }
])

db.voos.aggregate([
    {
      $group :
        {
            _id : null,
            totalDeVendas: {
                $sum: {
                    $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
                }
            }
        }
    }
])

// HAVING
db.voos.aggregate([
    {
      $group :
        {
            _id : "$empresa.nome",
            totalDeVendas: {
                $sum: {
                    $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
                }
            }
        }
    },
    { $match: { totalDeVendas: { $lte: 100000 } } }
])
db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    {
        $group: {
            _id: null,
            count: { $sum: 1 }
        }
    }
]);

db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    {
        $group: {
            _id: "totalDeVoos",
            total: { $sum: 1 }
        }
    }
]);

// DISTINCT
db.voos.aggregate([
    { $group : { _id : "$empresa.nome" } }
]);

db.voos.aggregate([
    { $group : { _id : "$empresa.nome" } },
    { $sort: { "_id": 1 } }
])

// Acumulando Valores
db.voos.aggregate([
    {
        $group : {
            _id : "$empresa.nome",
            total: {
                $sum: "$decolagens"
            }
        }
    }
])

// Multiplicando valores
db.voos.updateMany({}, { $set: { valorPassagem: NumberDecimal("200.00") } })

db.voos.aggregate([
    {
      $group :
        {
            _id : "$empresa.nome",
            totalDeVendas: {
                $sum: {
                    $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
                }
            }
        }
    },
    { $limit: 10 }
])

db.voos.aggregate([
    {
      $group :
        {
            _id : null,
            totalDeVendas: {
                $sum: {
                    $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
                }
            }
        }
    }
])

// HAVING
db.voos.aggregate([
    {
      $group :
        {
            _id : "$empresa.nome",
            totalDeVendas: {
                $sum: {
                    $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
                }
            }
        }
    },
    { $match: { totalDeVendas: { $lte: 100000 } } }
])
