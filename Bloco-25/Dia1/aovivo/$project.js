db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    {
      $project: {
        _id: 0,
        nomeDaEmpresa: "$empresa.nome",
        paisDeOrigem: "$aeroportoOrigem.pais",
        paisDeDestino: "$aeroportoDestino.pais",
      }
    }
  ]);
  
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
      { $match: { totalDeVendas: { $lte: 100000 } } },
      {
          $project: {
              _id: 0,
              empresa: "$_id",
              valorTotal: "$totalDeVendas"
          }
      }  
  ]);
  