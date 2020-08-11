import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // MY SOLUTION @Input('itemRecipe') recipe: { name: string, description: string, imagePath: string };
  @Input('itemRecipe') recipe: Recipe;
  @Input('itemId') index: number;
//Could now get recipe with .recipeService.getRecipe(this.index)

  constructor() { }

  ngOnInit(): void {
  }


}
