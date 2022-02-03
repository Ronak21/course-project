import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent{
    recipesSelected: boolean = true;
    @Output() recipesSelectedEvent = new EventEmitter<boolean>();

    onRecipesSelected() {
        this.recipesSelected = true;
        this.recipesSelectedEvent.emit(this.recipesSelected);
    }

    onShoppingListSelected() {
        this.recipesSelected = false;
        this.recipesSelectedEvent.emit(this.recipesSelected);
    }
}