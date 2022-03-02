import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe','Test Description','https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg'),
        new Recipe('Test Recipe','Test Description 1','https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg')
    ];

    public recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}