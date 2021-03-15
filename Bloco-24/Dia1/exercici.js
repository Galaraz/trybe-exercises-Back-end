1 .A seguir encontra-se uma sugestão de solução para os exercícios propostos.
Inserindo os documentos de exemplo na coleção movies do banco de dados class :

use class;
db.movies.insertMany([
  {
    "title": "Batman",
    "category": [ "action", "adventure" ],
    "imdbRating": 7.6,
    "budget": 35
  },
  {
    "title": "Godzilla",
    "category": [ "action", "adventure", "sci-fi" ],
    "imdbRating": 6.6
  },
  {
    "title": "Home Alone",
    "category": [ "family", "comedy" ],
    "imdbRating": 7.4
  }
]);


Verificando que existem três documentos na coleção:

db.movies.count()