import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe','Test Description','https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg'),
    new Recipe('Test Recipe','Test Description 1','https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipeEl: Recipe) {
    this.recipeSelectedEvent.emit(recipeEl);
  }

}
