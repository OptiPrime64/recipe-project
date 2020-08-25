import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {
  }

  // @Output() onNavClicked = new EventEmitter<string>();
  collapsed = true;

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
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
