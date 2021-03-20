const milissegundos = 60 * 24 * 60 * 60 * 1000;
db.pacotes.aggregate([
    {
        $addFields: {
            subtracao_inicio_data: {
                $subtract: ["$datas.inicio_data", milissegundos]
            },
            subtracao_fim_data: {
                $subtract: ["$datas.fim_data", milissegundos]
            }
        }
    },
    {
        $project: {
            pacote: 1,
            "datas.inicio_data": 1,
            subtracao_inicio_data: 1,
            "datas.fim_data": 1,
            subtracao_fim_data: 1
        }
    }
]);