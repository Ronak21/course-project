import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListService) {

    }

    private recipes: Recipe[] = [
        new Recipe('Ice-Cream',
        'Delicious Ice-Cream',
        'https://cdn.shopify.com/s/files/1/0101/2792/products/Ice_Cream_Bundle_400x.jpg?v=1459972317',
        [
            new Ingredient('Cream',1),
            new Ingredient('Milk', 1),
            new Ingredient('Sugar',1)
        ]),
        new Recipe('Veggie Pizza',
        'Delicious veg pizza!!',
        'https://media.istockphoto.com/photos/homemade-veggie-pizza-with-mushrooms-peppers-picture-id842082336',
        [
            new Ingredient('Dough',1),
            new Ingredient('Olives', 1),
            new Ingredient('Tomato Sauce',1)
        ])
    ];

    public recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}