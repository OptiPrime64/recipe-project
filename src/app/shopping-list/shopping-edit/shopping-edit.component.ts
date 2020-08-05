import { Component, OnInit } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  // onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
  //   this.ingrediantAdded.emit({
  //     name: nameInput.value,
  //     amount: +amountInput.value,
  //   });
  // }

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const newIngrediant = new Ingrediant(nameInput.value, +amountInput.value);
    this.shoppingListService.onIngrediantAdded(newIngrediant);
  }

}
