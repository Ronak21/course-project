import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesSelected: boolean = true;

  onRecipesSelectedEvent(recipesSelected: boolean) {
    this.recipesSelected = recipesSelected;
  }
}
