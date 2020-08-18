import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // = {name: 'Recipe Name', description: 'Description', imagePath: 'Ingrediants'}
  constructor() { }

  ngOnInit() {
  }

  // onRecipeWasSelected(recipeDetails: any) {
  //   this.selectedRecipe = recipeDetails;
  // }

}
