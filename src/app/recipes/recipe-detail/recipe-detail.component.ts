import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../../recipes/store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { }



  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.pipe(map(params => {
      return +params['id'];
    }), switchMap(id => {
      this.id = id;
      return this.store.select('recipes');
    }), map(recipesState => {
      return recipesState.recipes.find((recipe, index) => {
        return index === this.id;
      });
    })
    )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
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
