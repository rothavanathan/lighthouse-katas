const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let ingredientIsMissing;
  let foundRecipe;
  //forEach recipe, check if ingredients are in either bakeryA or bakeryB stock
  recipes.forEach(function(recipe){
    //initialize ingredient is missing count to 0
    ingredientIsMissing = 0
    //loop through ingredients...
    recipe.ingredients.forEach(function(ingredient){
      // and if they are not in stock in either bakery..
      if (bakeryA.indexOf(ingredient) === -1 && bakeryB.indexOf(ingredient) === -1){
        //increase the count of the missing ingredients
        ingredientIsMissing +=1;
      }
    })  
    //if both ingredients are in stock
    if (ingredientIsMissing === 0){
      foundRecipe = recipe.name
    }
  })
  return foundRecipe
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
