Exercício 1
Insira mais três documentos na coleção products em uma única operação:
db.products.insertMany(
    [
        { "productName": "Lapis", "stock": 10, "price": 20, "status":"A"},
        { "productName": "Tesoura", "price": 5, "status": "B" },
        { "productName": "Borracha", "price": 15, "status": "A" }
    ]
)
