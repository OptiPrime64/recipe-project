import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params ['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
}

// MY SOLUTION

// import { Component, OnInit, Input } from '@angular/core';
// import { Recipe } from '../recipe.model';
// import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


// @Component({
//   selector: 'app-recipe-detail',
//   templateUrl: './recipe-detail.component.html',
//   styleUrls: ['./recipe-detail.component.css']
// })
// export class RecipeDetailComponent implements OnInit {
//   @Input('detailsRecipe') recipe: Recipe;

//   constructor(private shoppingListService: ShoppingListService) { }

//   onAddToShoppingList() {

//     const recipeIngredients = this.recipe.ingredients;

//     let i: number;

//     for (i = 0; i < recipeIngredients.length; i++) {
//       console.log(recipeIngredients[i]);
//       this.shoppingListService.onIngrediantAdded(recipeIngredients[i])
//     }
//   }

//   ngOnInit(): void {
//   }

// }

// MY SOLUTION TWEAKED

// import { Component, OnInit, Input } from '@angular/core';
// import { Recipe } from '../recipe.model';
// import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


// @Component({
//   selector: 'app-recipe-detail',
//   templateUrl: './recipe-detail.component.html',
//   styleUrls: ['./recipe-detail.component.css']
// })
// export class RecipeDetailComponent implements OnInit {
//   @Input('detailsRecipe') recipe: Recipe;

//   constructor(private shoppingListService: ShoppingListService) { }

//   onAddToShoppingList() {

//     this.shoppingListService.fromRecipeDetail(this.recipe.ingredients)

//   }

//   ngOnInit(): void {
//   }

// }