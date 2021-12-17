import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe','Test Description','https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg'),
    new Recipe('Test Recipe','Test Description','https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
