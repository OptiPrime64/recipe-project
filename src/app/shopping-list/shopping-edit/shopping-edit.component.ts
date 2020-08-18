import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('shopForm', { static: false }) slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getEditIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  // onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
  //   this.ingrediantAdded.emit({
  //     name: nameInput.value,
  //     amount: +amountInput.value,
  //   });
  // }

  onSubmit(shopForm: NgForm) {

    const value = shopForm.value;
    const newIngrediant = new Ingredient(value.name, value.amount);

    if (!this.editMode) {
      this.shoppingListService.onIngrediantAdded(newIngrediant);
    } else {
      this.shoppingListService.updateIngredient(newIngrediant, this.editedItemIndex);
    }
    shopForm.reset();
    this.editMode = false;
  }

  clearItems() {
    this.slForm.reset()
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
