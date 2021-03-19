db.pedidos.insertMany(
    [
        { "_id" : 1, item : "amendoas", preco : 12, quantidade : 2 },
        { "_id" : 2, item : "nozes", preco : 20, quantidade : 1 },
        { "_id" : 3  }
    ]
);

db.inventario.insertMany(
    [
        { _id : 1, nome : "amendoas", descricao: "product 1", estoque : 120 },
        { _id : 2, nome : "pao", descricao: "product 2", estoque : 80 },
        { _id : 3, nome : "castanha de caju", descricao: "product 3", estoque : 60 },
        { _id : 4, nome : "nozes", descricao: "product 4", estoque : 70 },
        { _id : 5, nome: null, descricao: "Incomplete" },
        { _id : 6 }
    ]
)

db.pedidos.aggregate([
    {
      $lookup:
        {
          from: "inventario",
          localField: "item",
          foreignField: "nome",
          as: "inventario_docs"
        }
   }
])