db.pacotes.aggregate([
    {
        $addFields: {
            totalPacote: {
                $add: ["$precos.pacote_preco", "$precos.pacote_taxa", "$precos.voo_preco"]
            }
        }
    },
    {
        $addFields: {
            totalReal: {
                $multiply: ["$totalPacote", 5.32]
            }
        }
    },
    {
        $project: {
            pacote: 1,
            totalPacote: 1,
            totalRealOriginal: "$totalReal",
            totalRealParaCima: {
                $ceil: ["$totalReal"]
            },
            totalRealParaBaixo: {
                $floor: ["$totalReal"]
            }
        }
    }
])