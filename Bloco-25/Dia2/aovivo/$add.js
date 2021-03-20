use ("viagens");

db.pacotes.insertMany(
    [
        {
            "_id": 1,
            "pacote": "California Beach",
            "precos": {
                "pacote_preco": 10000,
                "pacote_taxa": 200,
                "voo_preco": 790
            },
            "datas": {
                "inicio_data": ISODate("2014-03-15T09:00:00Z"),
                "fim_data": ISODate("2014-10-15T09:00:00Z")
            }
        },
        {
            "_id": 2,
            "pacote": "New York",
            "precos": {
                "pacote_preco": 13000,
                "pacote_taxa": 150,
                "voo_preco": 990
            },
            "datas": {
                "inicio_data": ISODate("2014-03-15T09:00:00Z"),
                "fim_data": ISODate("2014-10-15T09:00:00Z")
            }
        },
        {
            "_id": 3,
            "pacote": "Bahamas",
            "precos": {
                "pacote_preco": 22000,
                "pacote_taxa": 350,
                "voo_preco": 1300
            },
            "datas": {
                "inicio_data": ISODate("2014-03-15T09:00:00Z"),
                "fim_data": ISODate("2014-10-15T09:00:00Z")
            }
        },
        {
            "_id": 4,
            "pacote": "Guarapari",
            "precos": {
                "pacote_preco": 2000,
                "pacote_taxa": 50,
                "voo_preco": 300
            },
            "datas": {
                "inicio_data": ISODate("2014-03-15T09:00:00Z"),
                "fim_data": ISODate("2014-10-15T09:00:00Z")
            }
        },
        {
            "_id": 5,
            "pacote": "Caldas Novas",
            "precos": {
                "pacote_preco": 1500,
                "pacote_taxa": 70,
                "voo_preco": 250
            },
            "datas": {
                "inicio_data": ISODate("2014-03-15T09:00:00Z"),
                "fim_data": ISODate("2014-10-15T09:00:00Z")
            }
        }
    ]
)

// $add

db.pacotes.aggregate([
    {
        $project: {
            pacote: 1,
            total: {
                $add: ["$precos.pacote_preco", "$precos.pacote_taxa", "$precos.voo_preco"]
            }
        }
    }
])

db.pacotes.aggregate([
    {
        $project: {
            pacote: 1,
            checkin_data: {
                $add: ["$datas.inicio_data", 60 * 24 * 60 * 60 * 1000]
            },
            checkout_data : {
                $add: ["$datas.fim_data", 60 * 24 * 60 * 60 * 1000]
            }
        }
    }
])

db.pacotes.aggregate([
    {
        $addFields: {
            milissegundos: 60 * 24 * 60 * 60 * 1000
        }
    },
    {
        $project: {
            pacote: 1,
            checkin_data: {
                $add: ["$datas.inicio_data", "$milissegundos"]
            },
            checkout_data: {
                $add: ["$datas.fim_data", "$milissegundos"]
            }
        }
    }
])

const milissegundos = 60 * 24 * 60 * 60 * 1000;

db.pacotes.aggregate([
    {
        $project: {
            pacote: 1,
            checkin_data: {
                $add: ["$datas.inicio_data", milissegundos]
            },
            checkout_data: {
                $add: ["$datas.fim_data", milissegundos]
            }
        }
    }
]);
