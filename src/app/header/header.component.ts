import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<fromApp.AppState>) {
  }

  // @Output() onNavClicked = new EventEmitter<string>();
  isAuthenticated = false;
  collapsed = true;
  private userSub: Subscription;

  ngOnInit() {
    this.userSub = this.store
    .select('auth')
    // .pipe(map(authState=>{return authState.user;}))
    .pipe(map(authState=>authState.user))
    .subscribe(user => {
      this.isAuthenticated = !!user;    // is same as: !user ? false : true;
      // console.log(!user);
      // console.log(!!user);
    });
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  // MY SOLUTION recipeClick() {
  //   this.onNavClicked.emit('recipes');
  // }
  // shopListClick() {
  //   this.onNavClicked.emit('shopping-list');
  // }

  // onSelect(whichPage: string){
  //   this.onNavClicked.emit(whichPage);
  // }

}
