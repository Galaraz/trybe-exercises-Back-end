/* Exercício 18 : Decremente em 100 o poder dos mutantes não contém a propriedade class . */

db.xmen.updateMany(
    {
      class: { $exists: false }
    },
    { 
inc: { power: -100 }
    }
  );