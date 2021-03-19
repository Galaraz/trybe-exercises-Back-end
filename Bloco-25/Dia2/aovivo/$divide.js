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
                $multiply: ["$totalPacote", 5.48]
            }
        }
    },
    {
        $project: {
            pacote: 1,
            totalPacote: 1,
            totalReal: { $round: "$totalReal" },
            parcelamento12x: {
                $divide: ["$totalReal", 12]
            }
        }
    }
])