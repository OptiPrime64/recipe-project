import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  onIngrediantAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  ingredientsFromDetails(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getShoppingList() {
    return this.ingredients.slice();
  }

  clearItems() {
    this.ingredients = [];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() { }
}


// MY SOLUTION

// import { Injectable, EventEmitter } from '@angular/core';
// import { Ingredient } from '../shared/ingrediant.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingListService {

//   ingredientsChanged = new EventEmitter<Ingredient[]>();

// private ingredients: Ingredient[] = [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 10),
//   ];

//   onIngrediantAdded(ingrediant: Ingredient) {
//     this.ingredients.push(ingrediant);
//     this.ingredientsChanged.emit(this.ingredients.slice());
//   }

//   getShoppingList() {
//     return this.ingredients.slice();
//   }

//   clearItems(){
//     this.ingredients = [];
//     this.ingredientsChanged.emit(this.ingredients.slice());
//   }

//   constructor() { }
// }


// MY SOLUTION TWEAKED


// import { Injectable, EventEmitter } from '@angular/core';
// import { Ingredient } from '../shared/ingrediant.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingListService {

//   ingredientsChanged = new EventEmitter<Ingredient[]>();

// private ingredients: Ingredient[] = [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 10),
//   ];

//   onIngrediantAdded(ingrediant: Ingredient) {
//     this.ingredients.push(ingrediant);
//     this.ingredientsChanged.emit(this.ingredients.slice());
//   }

//   fromRecipeDetail(ingredients: Ingredient[]){
//     this.ingredients.push(...ingredients);
//     this.ingredientsChanged.emit(this.ingredients.slice());
//   }

//   getShoppingList() {
//     return this.ingredients.slice();
//   }

//   clearItems(){
//     this.ingredients = [];
//     this.ingredientsChanged.emit(this.ingredients.slice());
//   }

//   constructor() { }
// }
