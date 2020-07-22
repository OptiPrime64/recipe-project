import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onNavClicked = new EventEmitter<string>();
  collapsed = true;

  // MY SOLUTION recipeClick() {
  //   this.onNavClicked.emit('recipes');
  // }
  // shopListClick() {
  //   this.onNavClicked.emit('shopping-list');
  // }

  onSelect(whichPage: string){
    this.onNavClicked.emit(whichPage);
  }

}
