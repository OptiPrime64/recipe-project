import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipe-project-6c8f6.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('https://recipe-project-6c8f6.firebaseio.com/recipes.json')
    .pipe(map
      (recipes=>{
      return recipes.map(recipe=>{
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }),tap(recipes=>{
      this.recipeService.setRecipes(recipes);
    }))
  }
}
