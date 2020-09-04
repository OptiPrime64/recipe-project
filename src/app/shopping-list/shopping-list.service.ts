import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getEditIngredient(index: number) {
    return this.ingredients[index];
  }

  // onIngrediantAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

  // ingredientsFromDetails(ingredients: Ingredient[]) {
  //   this.ingredients.push(...ingredients);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

  updateIngredient(newIngredient: Ingredient, index: number) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getShoppingList() {
    return this.ingredients.slice();
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // clearItems() {
  //   this.ingredients = [];
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

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
