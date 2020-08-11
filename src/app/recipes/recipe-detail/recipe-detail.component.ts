import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  paramsSubscription: Subscription;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params ['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }



}




//   onEditRecipe(){
//     this.router.navigate(['edit'], {relativeTo: this.route});

// OR

//     this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
//   }




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