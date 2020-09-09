import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediant.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';
import { setClassMetadata } from '@angular/core/src/r3_symbols';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('shopForm', { static: false }) slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;


  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });
  }

  // onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
  //   this.ingrediantAdded.emit({
  //     name: nameInput.value,
  //     amount: +amountInput.value,
  //   });
  // }

  onSubmit(shopForm: NgForm) {

    const value = shopForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (!this.editMode) {
      // this.shoppingListService.onIngrediantAdded(newIngrediant);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));

    } else {
      // this.shoppingListService.updateIngredient(newIngrediant, this.editedItemIndex);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredient));

    }
    shopForm.reset();
    this.editMode = false;
  }

  clearItems() {
    this.slForm.reset()
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient())
    this.clearItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

}
