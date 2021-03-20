db.pacotes.aggregate([
    {
        $addFields: {
            totalDolar: {
                $add: [ "$precos.pacote_preco", "$precos.pacote_taxa", "$precos.voo_preco"]
            },
            totalReal: {
                $multiply: ["$totalDolar", 5.48]
            }
        }
    }
])

db.pacotes.aggregate([
    {
        $addFields: {
            totalDolar: {
                $add: [ "$precos.pacote_preco", "$precos.pacote_taxa", "$precos.voo_preco"]
            }
        }
    },
    {
        $addFields: {
            totalReal: {
                $multiply: ["$totalDolar", 5.48]
            }
        }
    }
])