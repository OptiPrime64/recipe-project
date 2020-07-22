import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPage: string = 'recipes';

  navClicked(whichPage: string){
    this.showPage = whichPage;
  }
}
