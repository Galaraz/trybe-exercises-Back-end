db.voos.aggregate([
    {
      $group: {
        _id: {
          "nomeDaEmpresa": "$empresa.nome",
          "paisDeOrigem": "$aeroportoOrigem.pais",
          "paisDeDestino": "$aeroportoDestino.pais",
        },
        qtde: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: "$_id.nomeDaEmpresa",
        voos: {
          $push: {
            "paisDeOrigem": "$_id.paisDeOrigem",
            "paisDeDestino": "$_id.paisDeDestino",
            "quantidadeDeVoos": "$qtde"
            
          }
        }
      }
    }
  ]);

  db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    {
      $group: {
        _id: {
          "nomeDaEmpresa": "$empresa.nome",
          "paisDeOrigem": "$aeroportoOrigem.pais",
          "paisDeDestino": "$aeroportoDestino.pais",
        },
        qtde: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: "$_id.nomeDaEmpresa",
        voos: {
          $push: {
            "paisDeOrigem": "$_id.paisDeOrigem",
            "paisDeDestino": "$_id.paisDeDestino",
            "quantidadeDeVoos": "$qtde"
            
          }
        }
      }
    }
  ]);