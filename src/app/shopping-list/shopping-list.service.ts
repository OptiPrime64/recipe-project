import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingrediantsChanged = new EventEmitter<Ingrediant[]>();

private ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomatoes', 10),
  ];

  onIngrediantAdded(ingrediant: Ingrediant) {
    this.ingrediants.push(ingrediant);
    this.ingrediantsChanged.emit(this.ingrediants.slice());
  }

  getShoppingList() {
    return this.ingrediants.slice();
  }

  constructor() { }
}
