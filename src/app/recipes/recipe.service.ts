import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediant } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingrediant('Meat', 1),
        new Ingrediant('French Fries', 20)
      ]),

    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingrediant('Buns', 2),
        new Ingrediant('Meat', 1),
        new Ingrediant('Pickles', 3),
        new Ingrediant('Cheese', 1)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
