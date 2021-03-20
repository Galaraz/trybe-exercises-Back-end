use ("class");

db.pedidos.insertMany(
    [
        { "_id" : 1, "item" : "amendoas", "preco" : 12, "qtde_pedida" : 250 },
        { "_id" : 2, "item" : "nozes", "preco" : 20, "qtde_pedida" : 80 },
        { "_id" : 3, "item" : "biscoitos", "preco" : 10, "qtde_pedida" : 60 }
    ]
)

db.armazens.insertMany(
    [
        { "_id" : 1, "produto" : "amendoas", armazem: "A", "estoque" : 120 },
        { "_id" : 2, "produto" : "nozes", armazem: "A", "estoque" : 80 },
        { "_id" : 3, "produto" : "amendoas", armazem: "B", "estoque" : 60 },
        { "_id" : 4, "produto" : "biscoitos", armazem: "B", "estoque" : 35 },
        { "_id" : 5, "produto" : "biscoitos", armazem: "A", "estoque" : 35 }
    ]
)

db.pedidos.aggregate([
    {
       $lookup:
          {
            from: "armazens",
            let: { pedido_item: "$item", pedido_qtde: "$qtde_pedida" },
            pipeline: [
               { $match:
                  { $expr:
                     { $and:
                        [
                          { $eq: [ "$produto",  "$$pedido_item" ] },
                          { $gte: [ "$estoque", "$$pedido_qtde" ] }
                        ]
                     }
                  }
               },
               { $project: { produto: 0, _id: 0 } }
            ],
            as: "dados_estoque"
          }
     }
 ])

 // Exemplo com $group
db.pedidos.aggregate([
    {
       $lookup:
          {
            from: "armazens",
            let: { pedido_item: "$item", pedido_qtde: "$qtde_pedida" },
            pipeline: [
               {
                 $group: {
                   _id: "$produto",
                   total_estoque: { $sum: "$estoque" },
                   disponibilidade: { $push: "$armazem" }
                 }
               },
               { $match:
                  { $expr:
                     { $and:
                        [
                          { $eq: [ "$_id",  "$$pedido_item" ] },
                          { $gte: [ "$total_estoque", "$$pedido_qtde" ] }
                        ]
                     }
                  }
               },
               {
                $project: {
                  _id: 0,
                  total_estoque: 1,
                  disponibilidade: 1
                }
               }
            ],
            as: "dados_estoque"
          }
     }
 ])
