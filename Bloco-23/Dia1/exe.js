1.Agora crie um documento na coleção products , no database sample com os seguintes atributos e valores:

use sample
db.products.insertOne(
    {
        "productName": "Caixa",
        "price": 20
    }
)