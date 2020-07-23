import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  // = {name: 'Recipe Name', description: 'Description', imagePath: 'Ingrediants'} 
  constructor() { }

  ngOnInit(): void {
  }

  // onRecipeWasSelected(recipeDetails: any) {
  //   this.selectedRecipe = recipeDetails;
  // }

}
