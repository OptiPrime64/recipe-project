import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();



  private recipes: Recipe[] = [

    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),

    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Pickles', 3),
        new Ingredient('Cheese', 1)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    // return this.recipes.slice()[index];
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.ingredientsFromDetails(ingredients)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }


}


// MY SOLUTION

// import { Injectable, EventEmitter } from '@angular/core';
// import { Recipe } from './recipe.model';
// import { Ingredient } from '../shared/ingrediant.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipeService {

//   recipeSelected = new EventEmitter<Recipe>();

//   private recipes: Recipe[] = [

//     new Recipe(
//       'Tasty Schnitzel',
//       'A super-tasty Schnitzel - just awesome!',
//       'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
//       [
//         new Ingredient('Meat', 1),
//         new Ingredient('French Fries', 20)
//       ]),

//     new Recipe(
//       'Big Fat Burger',
//       'What else you need to say?',
//       'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//       [
//         new Ingredient('Buns', 2),
//         new Ingredient('Meat', 1),
//         new Ingredient('Pickles', 3),
//         new Ingredient('Cheese', 1)
//       ]),
//   ];

//   getRecipes() {
//     return this.recipes.slice();
//   }

//   constructor() { }
// }
